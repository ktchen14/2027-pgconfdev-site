<script lang="ts">
  import { Menu, UserPlus } from "@lucide/svelte";
  import { resolve } from "$app/paths";
  import { setHeaderContext } from "./context.ts";
  import Mark from "./Mark.svelte";
  import Search from "./Search.svelte";

  const { class: klass = undefined, children, ...rest } = $props();
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
    padding-block: 1.5rem;
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

  menu {
    @media (width >= 48rem) {
      display: flex;
      gap: 1.5rem;

      > :global(*) {
        margin-block: 0;
      }
    }
  }

  .button {
    box-sizing: content-box;
    height: 1lh;
    min-width: 1lh;

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
      padding-inline: 0.5em;

      > span {
        display: none;
      }
    }
  }

  button {
    background-color: initial;
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
</style>

<svelte:window
  onclick={(e) => {
    if (!expose || search || root.contains(e.target as Node)) return;
    expose = undefined;
  }}
/>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
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
    class="iconic"
    onclick={() => (expose = expose ? undefined : true)}
  >
    <Menu />
  </button>

  <Search bind:text={search} data-expose={expose} style="order: 1;" />

  <nav {id} aria-label="Main" data-expose={expose} style:order="2">
    <menu>{@render children()}</menu>
  </nav>

  <a
    aria-label="Register"
    class="button circle iconic"
    data-expose={expose}
    href="/"
    style:order="3"
  >
    <span>Register</span>
    <UserPlus />
  </a>
</header>
