<script lang="ts">
  import PGConf from "./PGConf.svg?no-inline";

  const rest = $props();
</script>

<style>
  a {
    display: flex;
    margin-inline-end: auto;

    @media (30rem <= width < 48rem) {
      :global([data-search]) > & {
        display: none;
      }
    }
  }

  svg {
    fill: currentColor;
    height: 2.5em;
  }
</style>

<a {...rest}>
  <svg viewBox="0 0 1464.2 411">
    <use href="{PGConf}#root" />
  </svg>
  <svg class="none" viewBox="0 0 558.7 411">
    <use href="{PGConf}#root" />
  </svg>
</a>
