<script lang="ts">
  import PGConf from "./PGConf.svg?no-inline";

  const rest = $props();
</script>

<style>
  a {
    display: flex;

    @media (30rem <= width < 48rem) {
      :global([data-search]:not([data-search=""])) > & {
        display: none;
      }
    }
  }

  svg {
    fill: currentColor;
    height: 2.25rem;

    @media (width < 48rem) {
      &:last-child {
        display: none;
      }
    }

    @media (48rem <= width < 56rem) {
      &:first-child {
        display: none;
      }
    }

    @media (width >= 56rem) {
      &:last-child {
        display: none;
      }
    }
  }
</style>

<a {...rest}>
  <svg viewBox="0 0 1464.2 411">
    <use href="{PGConf}#root" />
  </svg>
  <svg viewBox="0 0 558.7 411">
    <use href="{PGConf}#root" />
  </svg>
</a>
