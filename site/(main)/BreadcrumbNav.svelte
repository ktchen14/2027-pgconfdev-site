<!--
  @component Breadcrumb `<nav>` component of the `/` layout.
-->

<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = SvelteHTMLElements["nav"];
  const { class: klass, children, ...rest }: Props = $props();
</script>

<style>
  ol :global > li {
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    gap: 1em;

    &::before {
      content: "/";
    }

    a {
      width: auto;
    }

    > * {
      margin-block: 0;
    }
  }
</style>

<nav class={["(main)", klass]} aria-label="Breadcrumb" {...rest}>
  <ol class="iconic over" style:gap="1em">
    {@render children?.()}
  </ol>
</nav>
