<script lang="ts">
  import { page } from "$app/state";

  const { href, children, ...rest } = $props();

  const ariaCurrent = $derived(
    new URL(href, page.url).pathname === page.url.pathname ? "page" : undefined,
  );
</script>

<style>
  a {
    display: block;
    margin-block: -0.25em;
  }
</style>

<a {href} aria-current={ariaCurrent} {...rest}>
  {@render children()}
</a>
