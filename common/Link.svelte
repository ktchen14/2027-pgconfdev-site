<!--
  @component

  An `<a>` that sets `aria-current="page"` when it targets the active page, and
  sets `target="_blank"` when it targets an external origin.
-->

<script lang="ts">
  import { page } from "$app/state";

  const { href, children, ...rest } = $props();

  const to = $derived(new URL(href, page.url));

  const ariaCurrent = $derived(
    to.pathname === page.url.pathname ? "page" : undefined,
  );

  const target = $derived(to.origin === page.url.origin ? undefined : "_blank");
</script>

<a aria-current={ariaCurrent} {href} {target} {...rest}>
  {@render children()}
</a>
