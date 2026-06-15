<script module>
  export { nav };
</script>

<script>
  import { resolve } from "$app/paths";
  import { getContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { children } = $props();

  const context = getContext();
  context.nav = nav;
  context.crumbs.push(crumb);
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

{#snippet crumb()}
  <li aria-hidden="true">/</li>
  <li><Link href={resolve("/about")}>About</Link></li>
{/snippet}

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
