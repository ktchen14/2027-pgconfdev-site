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
    align-items: center;
    column-gap: 0;
    margin-block: 0;
    padding-block: var(--gap);
  }

  @mixin --button-square() {
    padding-inline: calc(1em * var(--button-size));
  }

  .circle {
    padding-inline: calc(2em * var(--button-size));
  }

  .stroke {
    box-shadow: none;
  }

  [aria-label="PGConf.dev"] {
    --bg-tint: var(--static-bg-tint);
    margin: calc(-0.5 * var(--gap));
    padding: calc(0.5 * var(--gap));
  }

  .search-button {
    @media (width < 48rem) {
      border-radius: var(--radius);
    }

    @media (width < 64rem) {
      @apply --button-square;
    }
  }

  .toggle-button {
    @apply --button-square;
    margin-inline-end: calc(-1em * var(--button-size) - 0.125em);

    @media (width < 48rem) {
      ~ * {
        width: 100%;
      }

      &[aria-expanded="false"] ~ * {
        display: none;
      }
    }
  }

  menu {
    align-items: center;
    gap: 0;

    @media (width < 48rem) {
      margin-inline: -0.75em;
    }

    :global ul {
      margin-inline: calc(0.75rem);
    }
  }

  .signin-button {
    @media (48rem <= width < 56rem) {
      @apply --button-square;
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
  <a aria-label="PGConf.dev" class="button iconic stroke" href={resolve("/")}>
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
  >
    <Menu class="size++" />
  </button>

  <nav id="nav-{id}" aria-label="Main">
    <menu class="flex@48-">
      {@render children?.()}

      <li
        aria-hidden="true"
        style:flex="0 0 calc(var(--gap) / 2)"
        style:height="1em"
      >
        <!-- Spacer -->
      </li>

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
