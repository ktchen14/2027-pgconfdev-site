<script lang="ts">
  const { icon: Icon, class: klass = undefined, children, ...rest } = $props();
</script>

<style>
  a {
    border-radius: var(--border-radius);
    gap: 0.75rem;
    margin-inline: -0.75rem;
    padding: 0.75rem;

    &:hover {
      background-color: var(--bg-tint);
    }
  }

  a > :global(svg) {
    background-color: var(--action-bg-mute);
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--border);
    color: var(--action-fg);
    height: 2.5rem;
    padding: 0.5rem;
    width: 2.5rem;
  }

  p {
    line-height: 1.2;
  }
</style>

<a class={["iconic", klass]} {...rest}>
  <Icon />
  <p>
    {@render children()}
  </p>
</a>
