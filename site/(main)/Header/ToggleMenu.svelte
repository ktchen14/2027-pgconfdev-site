<script lang="ts">
  import { ChevronDown } from "@lucide/svelte";
  import { tick } from "svelte";
  import { getContext } from "./context";
  import type { SvelteHTMLElements } from "svelte/elements";

  // type Props = ComponentProps<typeof Menu> & { name: string };
  type Props = SvelteHTMLElements["ul"] & { name: string };

  const { name, children, ...rest }: Props = $props();
  const id = $props.id();

  const context = getContext();
  const open = $derived(context.menu === id ? true : undefined);

  let root: HTMLElement;

  async function toggle(button: HTMLButtonElement) {
    context.menu = context.menu === id ? null : id;

    const source = button.getBoundingClientRect().top;
    await tick();
    const target = button.getBoundingClientRect().top;
    if (target < 0) window.scrollBy(0, target - source);
  }
</script>

<style>
  div {
    position: relative;
  }

  button {
    --bg-tint: var(--static-bg-tint);
    --fg: inherit;
    box-shadow: none;
    justify-content: space-between;
    margin-inline: calc(-2em * var(--button-size));
    width: stretch;

    > :global(.icon) {
      transition-property: transform;
    }

    &[aria-expanded="true"] > :global(.icon) {
      transform: rotate(180deg);
    }
  }

  ul {
    @media (width >= 48rem) {
      box-shadow: 0 1.5rem 3rem -1.5rem
        color-mix(in oklch, var(--static-fg) 40%, transparent);
      overflow: auto;
      position: absolute;

      margin-block-start: 1em;
      padding-block: 1.125em;
      right: calc(-0.5 * var(--gap));
      width: 15rem;
    }
  }

  [aria-expanded="false"] + * {
    display: none;
  }
</style>

<svelte:window
  onclick={(e) => {
    const target = e.target as Element;
    if (!open) return;
    if (target.closest(`#button-${id}, #menu-${id}`) !== null) return;
    context.menu = null;
  }}
/>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  bind:this={root}
  onkeydown={(e) => {
    if (!open || e.key !== "Escape") return;
    context.menu = null;
    e.currentTarget.querySelector("button")?.focus();
    e.stopPropagation();
  }}
>
  <button
    aria-controls="menu-{id}"
    aria-expanded={open === true}
    class="iconic stroke"
    id="button-{id}"
    onclick={(e) => toggle(e.currentTarget)}
  >
    {name}
    <ChevronDown />
  </button>

  <ul class="action-acme@48- border@48- static-area@48- size-" id="menu-{id}">
    {@render children?.()}
  </ul>
</div>
