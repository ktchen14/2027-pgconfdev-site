<script lang="ts">
  const { class: klass = undefined, children, ...rest } = $props();
</script>

<style>
  footer {
    color: var(--fg-mute);
    font-size: 0.875rem;

    @media (width >= 768px) {
      display: flex;
      gap: 1.5rem;
      justify-content: space-between;

      > :global(*) {
        margin-block: 0;
      }
    }
  }
</style>

<footer class={["restrict-1280", klass]} {...rest}>
  {@render children()}
</footer>
