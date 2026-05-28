<script lang="ts">
  import { ChevronDown } from "@lucide/svelte";
  import { getHeaderContext } from "./context.ts";

  const { name, children, ...rest } = $props();
  const id = $props.id();

  const header = getHeaderContext();

  function toggle(e: MouseEvent) {
    e.stopPropagation();
    header.menu = header.menu === id ? null : id;
  }

  const open = $derived(header.menu === id);
</script>

<style>
  li {
    position: relative;

    @media (width < 48rem) {
      display: contents;
    }
  }

  button {
    background-color: initial;
    color: inherit;

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

  div {
    font-size: 0.875em;
    order: 1;
    width: 100%;

    @media (width >= 48rem) {
      background-color: var(--bg);
      border: var(--border-width) solid var(--border);
      border-block-start: calc(3 * var(--border-width)) solid var(--action);
      box-shadow: 0 24px 48px -24px
        color-mix(in oklch, var(--ink) 45%, transparent);
      left: calc(-1.5rem - var(--border-width));
      padding: 1.5rem;
      position: absolute;
      top: calc(100% + 0.5rem);
      width: 16rem;
    }

    [data-open]:not([data-open="true"]) > & {
      display: none;
    }
  }
</style>

<li {...rest} data-open={open}>
  <button
    aria-controls={id}
    aria-expanded={open}
    class="iconic"
    onclick={toggle}
  >
    {name}
    <ChevronDown />
  </button>

  <div {id}>
    {@render children()}
  </div>
</li>
