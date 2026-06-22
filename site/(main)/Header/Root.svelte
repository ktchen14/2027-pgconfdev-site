<script lang="ts">
  import { Menu, Search, UserPlus, X } from "@lucide/svelte";
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
    align-items: center;
    margin-block: 0;
    padding-block: var(--gap);
  }

  .circle {
    padding-inline: calc(2em * var(--size));
  }

  .stroke {
    box-shadow: none;
  }

  [aria-label="PGConf.dev"] {
    --bg-tint: var(--static-bg-tint);
    margin: calc(-1.25em * var(--size));
    margin-inline-end: auto;
    padding: calc(1.25em * var(--size));
  }

  .search-button {
    margin: calc(-1.25em * var(--size));

    @media (width < 48rem) {
      border-radius: var(--radius);
    }

    @media (width < 64rem) {
      padding: calc(1.25em * var(--size));
    }
  }

  .toggle-button {
    margin: calc(-1.25em * var(--size));
    padding: calc(1.25em * var(--size));

    @media (width < 48rem) {
      ~ * {
        width: 100%;
      }

      &[aria-expanded="false"] ~ * {
        display: none;
      }
    }

    &[aria-expanded="true"] > :global(.lucide-menu) {
      display: none;
    }

    &[aria-expanded="false"] > :global(.lucide-x) {
      display: none;
    }
  }

  menu {
    align-items: center;
  }

  .signin-button {
    margin-inline: calc(-1.25em * var(--size));

    @media (width < 48rem) {
      margin-block-start: 0.625em;
    }

    @media (48rem <= width < 56rem) {
      margin-inline: 0;
      padding: calc(1.25em * var(--size));
    }

    @media (width >= 56rem) {
      margin-inline: 0;
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
  class={["flex", klass]}
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
  >
    <Menu class="size++" />
    <X class="size++" />
  </button>

  <nav id="nav-{id}" aria-label="Main">
    <menu class="flex@48-">
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
