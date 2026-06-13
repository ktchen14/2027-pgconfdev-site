<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";

  let { children } = $props();
</script>

<style>
  :target {
    scroll-margin-block-start: var(--gap);
  }

  main {
    padding-block: var(--margin);
  }
</style>

<main>
  <nav class="( main note" aria-label="CSS utilities">
    <p class="over">CSS Utilities</p>
    <ul>
      <li>
        <Link href={resolve("/internal/readme/text")}>Text</Link>
      </li>
      <li>
        <Link href={resolve("/internal/readme/appearance")}>Appearance</Link>
      </li>
      <li>
        <Link href={resolve("/internal/readme/layout")}>Layout</Link>
      </li>
      <li>
        <Link href={resolve("/internal/readme/page-layout")}>Page layout</Link>
      </li>
    </ul>
  </nav>

  {@render children()}
</main>
