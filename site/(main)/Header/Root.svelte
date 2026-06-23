<script lang="ts">
  import { Menu, Search, UserPlus } from "@lucide/svelte";
  import { resolve } from "$app/paths";
  import type { SvelteHTMLElements } from "svelte/elements";
  import { setContext } from "./context";
  import Mark from "./Mark.svelte";

  type Props = SvelteHTMLElements["header"];
  const { class: klass, children, ...rest }: Props = $props();
  const id = $props.id();

  let root: HTMLElement;

  const context = $state({ menu: null });
  setContext(context);

  let expose = $state(false);
</script>

<style>
  header {
    column-gap: 0.25rem;
  }

  .circle {
    padding-inline: calc(2em * var(--button-size));
  }

  .stroke {
    box-shadow: none;
  }

  [aria-label="PGConf.dev"] {
    margin: calc(-1em * var(--button-size));
    padding: calc(1em * var(--button-size));
  }

  .search-button {
    @media (width < 64rem) {
      padding: calc(1em * var(--button-size));
    }
  }

  .toggle-button {
    padding: calc(1em * var(--button-size));
  }

  .signin-button {
    @media (48rem <= width < 56rem) {
      padding: calc(1em * var(--button-size));
    }
  }

  nav {
    @media (width < 48rem) {
      width: 100%;
    }
  }

  menu {
    @media (width < 48rem) {
      margin-inline: -0.75em;
    }
  }
</style>

<svelte:window
  onclick={(e) => {
    if (!expose || root.contains(e.target as Node)) return;
    expose = false;
  }}
/>

<header
  bind:this={root}
  class={["flex-center", klass]}
  onkeydown={(e) => {
    if (!expose || e.key !== "Escape") return;
    expose = false;
    e.currentTarget.querySelector("button")?.focus();
    e.stopPropagation();
  }}
  {...rest}
>
  <a aria-label="PGConf.dev" class="button+ iconic stroke" href={resolve("/")}>
    <Mark style="height: 2.5rem;" />
  </a>

  <div style:flex="auto"></div>

  <button
    aria-labelledby="search-{id}"
    class="button+ circle iconic stroke search-button"
  >
    <span id="search-{id}" class="none@-64">Search</span>
    <Search class="size++" />
  </button>

  <button
    aria-controls="nav-{id}"
    aria-expanded={expose}
    aria-label={!expose ? "Open Menu" : "Close Menu"}
    class="none@48- button+ iconic stroke toggle-button"
    onclick={() => (expose = !expose)}
    style:margin-inline-end="-0.625em"
  >
    <Menu class="size++" />
  </button>

  <nav aria-label="Main" id="nav-{id}" class={{"none@-48": !expose}}>
    <menu class="flex-center@48-" style:gap="0.25rem">
      {@render children?.()}

      <li>
        <a
          aria-labelledby="signin-{id}"
          class="button+ circle iconic signin-button"
          href="#"
        >
          <span id="signin-{id}" class="none@48-56">Register</span>
          <UserPlus class="size++" />
        </a>
      </li>
    </menu>
  </nav>
</header>
