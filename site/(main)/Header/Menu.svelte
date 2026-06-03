<script lang="ts">
  import { ChevronDown } from "@lucide/svelte";
  import { getHeaderContext } from "./context.ts";

  const { name, triple = false, children, ...rest } = $props();
  const id = $props.id();

  const header = getHeaderContext();

  function toggle(e: MouseEvent) {
    e.stopPropagation();
    header.menu = header.menu === id ? null : id;
  }

  const open = $derived(header.menu === id);
</script>

<style>
  li:not(:has(> [data-open].triple)) {
    position: relative;
  }

  button {
    background-color: initial;
    color: inherit;
    justify-content: space-between;
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

  .menu {
    font-size: 0.875em;
    margin-block: 0.5rem calc(1.5rem - 0.25rem - 0.875 * 0.25rem);

    @media (width >= 48rem) {
      margin-left: calc(-1.5rem - var(--border-width));
      width: 16rem;
    }
  }

  .triple {
    @media (width >= 48rem) {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(3, 1fr);
      left: calc(50% - min(45rem, calc(100% - 2 * var(--margin))) / 2);
      margin-left: 0;
      width: min(45rem, calc(100% - 2 * var(--margin)));
    }
  }
</style>

<li>
  <button
    aria-controls={id}
    aria-expanded={open}
    class="iconic"
    onclick={toggle}
  >
    {name}
    <ChevronDown />
  </button>

  <div
    class={["menu", { triple }]}
    {id}
    data-open={open ? open : undefined}
    {...rest}
  >
    {@render children()}
  </div>
</li>
