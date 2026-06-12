<script lang="ts">
  const { children, ...rest } = $props();
</script>

<style>
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
</style>

<div {...rest}>{@render children?.()}</div>
