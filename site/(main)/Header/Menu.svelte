<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = SvelteHTMLElements["div"];
  const { children, ...rest }: Props = $props();
</script>

<style>
  div :global a[aria-current]:where(:not([aria-current="false"])) {
    background-color: var(--action-bg-tint);
  }

  div {
    @media (width >= 48rem) {
      background-color: var(--bg);
      border: 1px solid var(--border);
      border-block-start: 3px solid var(--action);
      box-shadow: 0 1.5rem 3rem -1.5rem
        color-mix(in oklch, var(--static-fg) 40%, transparent);
      overflow: auto;
      padding: var(--gap);
      position: absolute;
    }

    &:not([data-open]) {
      display: none !important;
    }
  }

  @media (width < 48rem) {
    div :global a {
      border-inline-start: 2px solid var(--border);
      border-radius: 0;
      margin-inline: 0;

      &:hover {
        border-color: var(--action-fg);
      }

      &[aria-current]:where(:not([aria-current="false"])) {
        border-color: var(--action-fg);
      }
    }

    div :global li {
      margin-block: 0;
    }
  }
</style>

<div {...rest}>{@render children?.()}</div>
