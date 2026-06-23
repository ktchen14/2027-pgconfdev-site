<!--
  @component Section `<nav>` component common to each layout.
-->

<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = SvelteHTMLElements["nav"];
  const { class: klass, children, ...rest }: Props = $props();
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
