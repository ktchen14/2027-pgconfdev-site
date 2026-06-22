<script lang="ts">
  import { ChevronDown } from "@lucide/svelte";
  import { tick, type ComponentProps } from "svelte";
  import { getContext } from "./context";
  import Menu from "./Menu.svelte";

  type Props = ComponentProps<typeof Menu> & { name: string };

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
  button {
    --bg-tint: var(--static-bg-tint);
    --fg: inherit;
    box-shadow: none;
    justify-content: space-between;
    margin-inline: calc(-2em * var(--size));
    width: stretch;

    :global(> .lucide-chevron-down) {
      transition-property: transform;
    }

    :global(&[aria-expanded="true"] > .lucide-chevron-down) {
      transform: rotate(180deg);
    }
  }
</style>

<svelte:window
  onclick={(e) => {
    if (!open || root.contains(e.target as Node)) return;
    context.menu = null;
  }}
/>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  bind:this={root}
  style:display="contents"
  onkeydown={(e) => {
    if (!open || e.key !== "Escape") return;
    context.menu = null;
    e.currentTarget.querySelector("button")?.focus();
    e.stopPropagation();
  }}
>
  <button
    aria-controls={id}
    aria-expanded={open === true}
    class="iconic stroke"
    onclick={(e) => toggle(e.currentTarget)}
  >
    {name}
    <ChevronDown />
  </button>

  <Menu {id} data-open={open} {...rest}>
    {@render children?.()}
  </Menu>
</div>
