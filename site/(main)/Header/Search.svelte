<script lang="ts">
  import { List, MapPin, Search as SearchIcon, User } from "@lucide/svelte";
  import Result from "./Result.svelte";

  let { text = $bindable(), ...rest } = $props();

  let search = $state<HTMLInputElement>();
</script>

<style>
  search {
    position: relative;

    @media (width < 30rem) {
      width: 100%;

      :global(:not([data-expanded="true"])) > & {
        display: none;
      }
    }

    @media (width >= 30rem) {
      flex: auto;
      margin-inline-end: auto;
      max-width: 18rem;

      :global([data-search]:not([data-search=""]) > &) {
        max-width: none;
      }
    }
  }

  label {
    border-radius: calc(infinity * 1px);
    border: var(--border-width) solid var(--border);
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
    min-width: 6em;
    outline: 0;
    padding: 0;
  }

  .searchpop {
    font-size: 0.875rem;
    margin-top: 1.5rem;

    @media (width >= 48rem) {
      border-radius: 0 0 var(--border-radius) var(--border-radius);
      margin-top: 0.5rem;
      max-height: min(70vh, 28rem);
    }
  }

  .footer {
    color: var(--fg-tint);
    font-family: var(--mono-font);
    font-size: 0.75rem;
  }
</style>

<search {...rest}>
  <label class="iconic">
    <SearchIcon />
    <input bind:this={search} type="search" size=6 placeholder="Search…" bind:value={text} />
  </label>

  <div class="menu searchpop" data-searchpop data-open={!!text}>
    <div class="main">
      <p class="kicker">Talks</p>
      <Result {search} href="#" icon={List} title="Zero-downtime upgrades with logical replication" subtitle="Wed · 14:00 · Track A" />

      <p class="kicker">Speakers</p>
      <Result {search} href="#" icon={User} title="Amara Okonkwo" subtitle="Speaker · 2 talks" />

      <p class="kicker">Logistics</p>
      <Result {search} href="#" icon={MapPin} title="Venue & floor plans" subtitle="Attend · Getting around" />
    </div>

    <hr />

    <div class="footer">
      <strong>
        <a href="/">See all results</a>
      </strong>
      for "{text?.trim() || "your search"}" ↵
    </div>
  </div>
</search>
