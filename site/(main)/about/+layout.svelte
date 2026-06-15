<script>
  import { resolve } from "$app/paths";
  import { setContext } from "$lib/layout";
  import Link from "$lib/Link";

  const { children } = $props();

  const headerId = "about-the-conference";
  const context = $state({ nav: Object.assign(nav, { headerId }) });
  setContext(context);
</script>

<style>
  :global(header h1) {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    letter-spacing: -0.02em;
    line-height: 1;
  }

  li > :global(a) {
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
  <h2 id={headerId} class="over">About the Conference</h2>

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
