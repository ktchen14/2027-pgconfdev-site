<script lang="ts">
  import { page } from "$app/state";

  const { href, children, ...rest } = $props();

  const ariaCurrent = $derived(
    new URL(href, page.url).pathname === page.url.pathname ? "page" : undefined,
  );
</script>

<style>
  a {
    border-radius: var(--border-radius);
    color: inherit;
    display: block;
    margin-block: -0.25em;
    margin-inline: -0.5em;
    padding-block: 0.25em;
    padding-inline: 0.5em;

    &:hover {
      background-color: var(--bg-tint);
      color: var(--action);
    }
  }
</style>

<a {href} aria-current={ariaCurrent} {...rest}>
  {@render children()}
</a>
