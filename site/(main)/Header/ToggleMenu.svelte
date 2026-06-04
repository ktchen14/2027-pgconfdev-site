<script lang="ts">
  import { ChevronDown } from "@lucide/svelte";
  import { getHeaderContext } from "./context.ts";
  import Menu from "./Menu.svelte";

  const { name, children, ...rest } = $props();
  const id = $props.id();

  const header = getHeaderContext();
  const open = $derived(header.menu === id ? true : undefined);

  let root: HTMLElement;
</script>

<style>
  button {
    background-color: initial;
    color: inherit;
    justify-content: space-between;
    margin-block: -0.25em;
    margin-inline: -0.5em;
    padding-block: 0.25em;
    padding-inline: 0.5em;
    width: calc(100% + 1em);

    &:hover {
      background-color: var(--bg-tint);
    }

    &:is(:hover, [aria-expanded="true"]) {
      color: var(--action);
    }

    :global(> svg) {
      transition-property: color, transform;
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

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
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
    onclick={() => (header.menu = header.menu === id ? null : id)}
  >
    {name}
    <ChevronDown />
  </button>

  <Menu {id} data-open={open} {...rest}>
    {@render children()}
  </Menu>
</div>
