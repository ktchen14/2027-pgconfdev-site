<script module lang="ts">
  import { createHighlighter } from "shiki";

  const highlighter = await createHighlighter({
    langs: ["html"],
    themes: ["catppuccin-macchiato"],
  });

  function render(source: string) {
    return highlighter.codeToHtml(source.trim(), {
      lang: "html",
      theme: "catppuccin-macchiato",
    });
  }
</script>

<script lang="ts">
  const { source, children = undefined, ...rest } = $props();
</script>

<style>
  figure {
    border: 1px solid var(--border);

    > :global(*) {
      padding: var(--gap);
    }

    :global(pre) {
      white-space: pre-wrap;
    }
  }
</style>

<div class="p">
  <figure>
    <div {...rest}>
      {#if children}{@render children()}{:else}{@html source}{/if}
    </div>
    {@html render(source)}
  </figure>
</div>
