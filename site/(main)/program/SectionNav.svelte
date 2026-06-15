<!--
  @component Section `<nav>` component of the `/program` layout.
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
    <li><Link href={resolve("/program")}>Call for proposals</Link></li>
    <li><Link href={resolve("/program/schedule")}>Schedule</Link></li>
  </ul>
{/snippet}

<SectionNav aria-labelledby="program-nav" {...rest}>
  <h2 id="program-nav" class="over">Program</h2>
  {@render ul()}
  {@render children?.()}
</SectionNav>
