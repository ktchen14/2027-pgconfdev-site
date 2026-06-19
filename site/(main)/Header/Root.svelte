<script lang="ts">
  import { Menu, UserPlus } from "@lucide/svelte";
  import { resolve } from "$app/paths";
  import type { SvelteHTMLElements } from "svelte/elements";
  import { setHeaderContext } from "./context";
  import Mark from "./Mark.svelte";
  import PagefindSearch from "./PagefindSearch.svelte";
  import Search from "./Search.svelte";
  import { Search as SearchIcon } from "@lucide/svelte";

  type Props = SvelteHTMLElements["header"];
  const { class: klass, children, ...rest }: Props = $props();
  const id = $props.id();

  let root: HTMLElement;

  const header = $state({ menu: null });
  setHeaderContext(header);

  let expose = $state<true | undefined>();
  let search = $state("");
</script>

<style>
  header {
    align-items: center;
    justify-content: space-between;
    margin-block: 0;
    padding-block: var(--gap);
    position: relative;
  }

  nav {
    @media (width < 48rem) {
      width: 100%;

      &:not([data-expose]) {
        display: none;
      }
    }

    [data-search] > & {
      display: none;
    }
  }

  .button {
    box-sizing: content-box;

    @media (width < 48rem) {
      width: 100%;

      &:not([data-expose]) {
        display: none;
      }

      [data-search] > & {
        display: none;
      }
    }

    @media (48rem <= width < 64rem) {
      padding-inline: calc(1em * var(--size));
    }
  }

  [aria-label=Menu] {
    box-shadow: none;

    @media (width < 30rem) {
      order: 1;
    }

    @media (width >= 30rem) and (width < 48rem) {
      order: 2;

      [data-search] > & {
        display: none;
      }
    }
  }
</style>

<svelte:window
  onclick={(e) => {
    if (!expose || search || root.contains(e.target as Node)) return;
    expose = undefined;
  }}
/>

<header
  bind:this={root}
  class={["flex", klass]}
  data-search={search ? true : undefined}
  onkeydown={(e) => {
    if (!expose || e.key !== "Escape") return;
    expose = undefined;
    e.currentTarget.querySelector("button")?.focus();
    e.stopPropagation();
  }}
  {...rest}
>
  <Mark href={resolve("/")} aria-label="PGConf.dev" />

  <button
    aria-controls={id}
    aria-expanded={expose === true}
    aria-label="Menu"
    class="button+ iconic none@48- stroke"
    onclick={() => (expose = expose ? undefined : true)}
  >
    <Menu class="size++" />
  </button>

  <!-- <PagefindSearch /> -->

  <!-- <Search bind:text={search} data-expose={expose} style="order: 1;" /> -->

  <nav {id} aria-label="Main" data-expose={expose} style:order="2">
    <menu class="flex@48-">{@render children?.()}</menu>
  </nav>

  <a
    aria-label="Register"
    class="button++ circle iconic delete square"
    data-expose={expose}
    href="#"
    style:order="3"
  >
    <span class="none@48-64">Register</span>
    <UserPlus class="size+" />
  </a>

  <button class="button++ circle iconic square stroke" style:order="2">
    <SearchIcon />
  </button>
</header>
