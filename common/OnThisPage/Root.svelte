<script lang="ts">
  import { Context, setContext } from "./context.ts";

  const { children, ...rest } = $props();

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
  {@render children()}
</nav>
