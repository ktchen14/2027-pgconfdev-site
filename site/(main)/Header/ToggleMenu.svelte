<script lang="ts">
  import { ChevronDown } from "@lucide/svelte";
  import { tick } from "svelte";
  import { getHeaderContext } from "./context";
  import Menu from "./Menu.svelte";

  const { name, children, ...rest } = $props();
  const id = $props.id();

  const header = getHeaderContext();
  const open = $derived(header.menu === id ? true : undefined);

  let root: HTMLElement;

  async function toggle(button: HTMLButtonElement) {
    header.menu = header.menu === id ? null : id;

    const source = button.getBoundingClientRect().top;
    await tick();
    const target = button.getBoundingClientRect().top;
    if (target < 0) window.scrollBy(0, target - source);
  }
</script>

<style>
  button {
    background-color: initial;
    color: inherit;
    justify-content: space-between;
    margin-inline: -0.75em;
    padding-inline: 0.75em;
    width: stretch;

    &:hover {
      background-color: var(--bg-tint);
    }

    &:is(:hover, [aria-expanded="true"]) {
      color: var(--action);
    }

    :global(> svg) {
      transition-property: transform;
    }

    :global(&[aria-expanded="true"] > svg) {
      transform: rotate(180deg);
    }
  }
</style>

<svelte:window
  onclick={(e) => {
    if (!open || root.contains(e.target as Node)) return;
    header.menu = null;
  }}
/>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  bind:this={root}
  style:display="contents"
  onkeydown={(e) => {
    if (!open || e.key !== "Escape") return;
    header.menu = null;
    e.currentTarget.querySelector("button")?.focus();
    e.stopPropagation();
  }}
>
  <button
    aria-controls={id}
    aria-expanded={open === true}
    class="iconic"
    onclick={(e) => toggle(e.currentTarget)}
  >
    {name}
    <ChevronDown />
  </button>

  <Menu {id} data-open={open} {...rest}>
    {@render children()}
  </Menu>
</div>
