<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";
  import { Context, setContext } from "./context.ts";

  type Props = SvelteHTMLElements["nav"];
  const { children, ...rest }: Props = $props();

  setContext(new Context());
</script>

<style>
  nav {
    background-color: var(--bg);
    padding: calc(0.75rem * 0.875);
    position: sticky;
    top: var(--gap);
  }
</style>

<nav aria-labelledby="on-this-page" {...rest}>
  <h2 id="on-this-page" class="over">On This Page</h2>
  {@render children?.()}
</nav>
