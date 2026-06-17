<!--
  @component Section `<nav>` component of the `/` layout.
-->

<script lang="ts">
  const { class: klass = undefined, children = undefined, ...rest } = $props();
</script>

<style>
  nav :global a {
    border-inline-start: 2px solid var(--border);
    border-radius: 0;
    margin-inline: 0;

    &:hover {
      border-color: var(--action-fg);
    }

    &[aria-current]:where(:not([aria-current="false"])) {
      background-color: var(--action-bg-tint);
      border-color: var(--action-fg);
    }
  }

  nav :global li {
    margin-block: 0;
  }
</style>

<nav class={["(", "note", klass]} {...rest}>
  {@render children?.()}
</nav>
