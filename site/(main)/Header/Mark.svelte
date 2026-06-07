<script lang="ts">
  import PGConf from "./PGConf.svg?no-inline";

  const rest = $props();
</script>

<style>
  a {
    display: flex;

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
  <svg class="none[48-56]" viewBox="0 0 1464.2 411">
    <use href="{PGConf}#root" />
  </svg>
  <svg class="none[-48] none[56-]" viewBox="0 0 558.7 411">
    <use href="{PGConf}#root" />
  </svg>
</a>
