<script lang="ts">
  import { Search } from "@lucide/svelte";
  import { resolve } from "$app/paths";
  import { PGConf } from "$lib/logo";
  import { setHeaderContext } from "./context.ts";

  let {
    search = $bindable(),
    class: klass = undefined,
    children,
    ...rest
  } = $props();

  let header = $state({ menu: null });
  setHeaderContext(header);
</script>

<style>
  header {
    justify-content: space-between;
  }

  nav {
    @media (width < 60rem) {
      order: 1;
      width: 100%;
    }
  }

  menu {
    flex: none;

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

  search {
    max-width: 16rem;
  }

  label {
    border-radius: calc(infinity * 1px);
    border: var(--border-width) solid var(--border);
    color: var(--fg-mute);
    cursor: text;
    padding-block: calc(0.375em - var(--border-width));
    padding-inline: 0.5em;

    &:has([type="search"]:focus) {
      border-color: var(--action);
      color: var(--action);
    }
  }

  [type="search"] {
    background-color: initial;
    border: 0;
    color: var(--fg-mute);
    flex: 1 1 0;
    font-size: 0.875em;
    min-width: 6em;
    outline: 0;
    padding: 0;
    width: 6em;
  }

  .w {
    @media (width < 64rem) {
      display: none;
    }
  }

  .n {
    @media (width >= 64rem) {
      display: none;
    }
  }
</style>

<svelte:window
  onclick={(e) => {
    if ((e.target as Element)?.closest("[data-open=true]") === null)
      header.menu = null;
  }}
  onkeydown={(e) => {
    if (header.menu === null || e.key !== "Escape") return;
    const target = e.target as Element | null;
    target?.closest("[data-open=true]")?.querySelector("button")?.focus();
    header.menu = null;
  }}
/>

<header class={["flex", klass]} {...rest}>
  <a class="flex" href={resolve("/")}>
    <PGConf style="height: calc(1lh + 0.75em);" />
  </a>

  <nav aria-label="Main">
    <menu class="flex">
      {@render children()}
    </menu>
  </nav>

  <search class="flex" style:flex="auto">
    <label class="iconic" style:flex="auto">
      <Search />
      <input type="search" placeholder="Search…" bind:value={search} />
    </label>
  </search>

  <a role="button" href="/">Register</a>
</header>
