<script>
  const { children } = $props();
</script>

<style>
  :global(header h1) {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    letter-spacing: -0.02em;
    line-height: 1;
  }
</style>

{@render children()}
