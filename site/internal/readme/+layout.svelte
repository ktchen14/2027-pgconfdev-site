<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";

  let { children } = $props();
</script>

<style>
  :target {
    scroll-margin-block-start: var(--gap);
  }

  main {
    padding-block: var(--margin);
  }

  :global(nav) {
    background-color: var(--static-bg);
    position: sticky;
    top: var(--gap);
  }
</style>

<main>
  <nav class="( none@-64 note" aria-label="CSS utilities">
    <p class="over">CSS Utilities</p>
    <ul>
      <li>
        <a
          href={resolve("/internal/readme/text")}
          aria-current={page.url.pathname === resolve("/internal/readme/text")
            ? "page"
            : undefined}>Text</a
        >
      </li>
      <li>
        <a
          href={resolve("/internal/readme/appearance")}
          aria-current={page.url.pathname ===
          resolve("/internal/readme/appearance")
            ? "page"
            : undefined}>Appearance</a
        >
      </li>
      <li>
        <a
          href={resolve("/internal/readme/layout")}
          aria-current={page.url.pathname === resolve("/internal/readme/layout")
            ? "page"
            : undefined}>Layout</a
        >
      </li>
    </ul>
  </nav>

  {@render children()}
</main>
