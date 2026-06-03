<script lang="ts">
  import { Menu, UserPlus } from "@lucide/svelte";
  import { resolve } from "$app/paths";
  import { setHeaderContext } from "./context.ts";
  import Mark from "./Mark.svelte";
  import Search from "./Search.svelte";

  const { class: klass = undefined, children, ...rest } = $props();

  let root: HTMLElement;

  const header = $state({ menu: null });
  setHeaderContext(header);

  let expanded = $state(false);
  let search = $state("");
</script>

<style>
  header {
    justify-content: space-between;
    position: relative;
  }

  nav {
    @media (width < 48rem) {
      width: 100%;

      :not([data-expanded="true"]) > & {
        display: none;
      }
    }

    [data-search] > & {
      display: none;
    }
  }

  menu {
    @media (width >= 48rem) {
      display: flex;
      flex: none;
      gap: 1.5rem;

      > :global(*) {
        margin-block: 0;
      }
    }

    :global(> li > a) {
      display: block;
    }

    :global(> li > :is(a, button)) {
      margin-block: -0.25em;
      margin-inline: -0.5em;
      padding-block: 0.25em;
      padding-inline: 0.5em;
    }
  }

  [role="button"] {
    justify-content: center;

    @media (width < 48rem) {
      width: 100%;

      :not([data-expanded="true"]) > & {
        display: none;
      }

      [data-search] > & {
        display: none;
      }
    }

    @media (48rem <= width < 64rem) {
      padding: 0.5em;

      > span {
        display: none;
      }
    }
  }

  button {
    background-color: initial;
    border-radius: var(--border-radius);
    color: inherit;
    margin: -0.5em;
    padding: 0.5em;

    &:hover {
      background-color: var(--bg-tint);
      color: var(--action);
    }

    @media (width < 30rem) {
      order: 1;
    }

    @media (width >= 30rem) and (width < 48rem) {
      order: 2;

      [data-search] > & {
        display: none;
      }
    }

    @media (width >= 48rem) {
      display: none;
    }
  }

  /* ============================================================
     Search focused state
     ============================================================ */

  /* ≥768px (single row): hide nav so search expands into its space */
</style>

<svelte:window
  onclick={(e) => {
    const target = e.target as Element | null;
    if (expanded && !root.contains(target)) expanded = false;
  }}
  onkeydown={(e) => {
    if (e.key !== "Escape") return;
    const target = e.target as Element | null;
    if (expanded) {
      expanded = false;
    }
  }}
/>

<header
  bind:this={root}
  class={["flex", klass]}
  data-expanded={expanded}
  data-search={search ? search : undefined}
  {...rest}
>
  <Mark href={resolve("/")} aria-label="PGConf.dev" />

  <button
    aria-expanded={expanded}
    aria-label="Menu"
    class="iconic"
    onclick={() => (expanded = !expanded)}
  >
    <Menu />
  </button>

  <Search bind:text={search} style="order: 1;" />

  <nav aria-label="Main" style:order="2">
    <menu>{@render children()}</menu>
  </nav>

  <a
    role="button"
    class="iconic"
    href="/"
    aria-label="Register"
    style:order="3"
  >
    <span>Register</span>
    <UserPlus />
  </a>
</header>
