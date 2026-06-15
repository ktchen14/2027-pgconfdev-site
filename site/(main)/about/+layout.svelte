<script module>
  export { nav };
</script>

<script>
  import { resolve } from "$app/paths";
  import { getContext, setContext } from "$lib/layout";
  import Link from "$lib/Link";
  import BreadcrumbNav from "./BreadcrumbNav.svelte";

  const { children } = $props();

  setContext({ ...getContext(), BreadcrumbNav, nav });
</script>

<style>
  :global(header h1) {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    letter-spacing: -0.02em;
    line-height: 1;
  }

  ul :global(a) {
    border-inline-start: 2px solid var(--border);
    border-radius: 0;
    margin-inline: 0;

    &:global(:hover) {
      border-color: var(--action-fg);
    }

    &:global([aria-current]:where(:not([aria-current="false"]))) {
      background-color: var(--action-bg-tint);
      border-color: var(--action-fg);
    }
  }
</style>

{#snippet nav()}
  <ul>
    <li><Link href={resolve("/about")}>About PGConf.dev</Link></li>
    <li><Link href={resolve("/about/team")}>Team</Link></li>
    <li><Link href={resolve("/about/conduct")}>Code of conduct</Link></li>
    <li>
      <Link href={resolve("/about/policies")}>Policies &amp; privacy</Link>
    </li>
  </ul>
{/snippet}

{@render children()}
