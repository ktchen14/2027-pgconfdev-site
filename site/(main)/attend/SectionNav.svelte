<!--
  @component Section `<nav>` component of the `/attend` layout.
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
    <li><Link href={resolve("/attend")}>Venue</Link></li>
    <li><Link href={resolve("/attend/travel")}>Travel &amp; hotels</Link></li>
    <li><Link href={resolve("/attend/social")}>Social events</Link></li>
    <li><Link href={resolve("/attend/volunteer")}>Volunteer</Link></li>
  </ul>
{/snippet}

<SectionNav aria-labelledby="attend-nav" {...rest}>
  <h2 id="attend-nav" class="over">Attend</h2>
  {@render ul()}
  {@render children?.()}
</SectionNav>
