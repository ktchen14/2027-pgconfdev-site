<script lang="ts">
  import { Search as SearchIcon } from "@lucide/svelte";
  import SearchMenu from "./SearchMenu.svelte";

  let { text = $bindable(), ...rest } = $props();

  let node: HTMLInputElement;
</script>

<style>
  search {
    position: relative;

    @media (width < 30rem) {
      width: 100%;

      &:not([data-expose]) {
        display: none;
      }
    }

    @media (width >= 30rem) {
      flex: auto;
      margin-inline-end: auto;
      max-width: 18rem;

      &[data-search] {
        max-width: none;
      }
    }
  }

  label {
    border: 1px solid var(--border);
    color: var(--fg-mute);
    cursor: text;
    flex: auto;
    height: 2.25rem;
    padding-inline: 0.5em;

    &:focus-within {
      border-color: var(--action);
      color: var(--action);
    }
  }

  [type="search"] {
    background-color: initial;
    border: 0;
    color: var(--fg-mute);
    flex: 1 1 0;
    font-size: 0.875em;
    min-width: 4em;
    outline: 0;
    padding: 0;
    width: 0;
  }
</style>

<search
  data-search={text ? true : undefined}
  onkeydown={(e) => {
    if (e.key !== "Escape") return;
    node.focus();
    e.stopPropagation();
  }}
  {...rest}
>
  <label class="iconic circle">
    <SearchIcon />
    <input
      bind:this={node}
      bind:value={text}
      onkeydown={(e) => e.stopPropagation()}
      placeholder="Search…"
      type="search"
    />
  </label>

  <SearchMenu {text} />
</search>
