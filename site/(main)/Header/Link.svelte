<script lang="ts">
  import { page } from "$app/state";

  const { href, children, ...rest } = $props();

  const ariaCurrent = $derived(
    new URL(href, page.url).pathname === page.url.pathname ? "page" : undefined,
  );
</script>

<style>
  a {
    border-radius: var(--radius);
    display: block;
    margin-block: -0.375em;
    margin-inline: -0.75em;
    padding-block: 0.375em;
    padding-inline: 0.75em;

    &:hover {
      background-color: var(--bg-tint);
      color: var(--action);
    }
  }
</style>

<a {href} aria-current={ariaCurrent} {...rest}>
  {@render children()}
</a>
