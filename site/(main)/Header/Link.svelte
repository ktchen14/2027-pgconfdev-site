<script lang="ts">
  import { page } from "$app/state";

  const { href, children, ...rest } = $props();

  const ariaCurrent = $derived.by(() => {
    if (new URL(href, page.url).pathname === page.url.pathname) return "page";
  });
</script>

<li>
  <a {href} aria-current={ariaCurrent} {...rest}>
    {@render children()}
  </a>
</li>
