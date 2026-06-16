<script module lang="ts">
  import html from "@shikijs/langs/html";
  import catppuccinMacchiato from "@shikijs/themes/catppuccin-macchiato";
  import { createHighlighterCore } from "shiki/core";
  import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

  const highlighter = await createHighlighterCore({
    engine: createJavaScriptRegexEngine(),
    langs: [html],
    themes: [catppuccinMacchiato],
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
  }

  div {
    padding: var(--gap);
  }

  figcaption {
    margin-block: 0;
  }

  figcaption > :global(pre) {
    padding: var(--gap);
    white-space: pre-wrap;
  }
</style>

<figure>
  <div {...rest}>
    {#if children}
      {@render children()}
    {:else}
      {@html source}
    {/if}
  </div>

  <figcaption>
    {@html render(source)}
  </figcaption>
</figure>
