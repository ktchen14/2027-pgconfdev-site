<!--
  @component Section `<nav>` component of the `/about` layout.
-->

<script module lang="ts">
  export { ul };
</script>

<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import SectionNav from "../SectionNav.svelte";

  const { children = undefined, ...rest } = $props();
</script>

{#snippet ul()}
  <ul>
    <li><Link href={resolve("/about")}>About PGConf.dev</Link></li>
    <li><Link href={resolve("/about/team")}>Team</Link></li>
    <li><Link href={resolve("/about/conduct")}>Code of conduct</Link></li>
    <li>
      <Link href={resolve("/about/policies")}>Policies &amp; privacy</Link>
    </li>
  </ul>
{/snippet}

<SectionNav aria-labelledby="about-the-conference" {...rest}>
  <h2 id="about-the-conference" class="over">About the Conference</h2>
  {@render ul()}
  {@render children?.()}
</SectionNav>
