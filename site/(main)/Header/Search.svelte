<script lang="ts">
  import { List, MapPin, Search as SearchIcon, User } from "@lucide/svelte";
  import { setSearchContext, type Search } from "./context.ts";
  import Result from "./Result.svelte";

  let { text = $bindable(), ...rest } = $props();

  const search = $state<Search>({ node: undefined });
  setSearchContext(search);
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
    <input
      bind:this={search.node}
      type="search"
      size="8"
      placeholder="Search…"
      bind:value={text}
    />
  </label>

  <div
    class="menu searchpop"
    data-searchpop
    data-open={text ? true : undefined}
  >
    <div class="main">
      <p class="kicker">Talks</p>
      <ul>
        <li>
          <Result href="#" icon={List}>
            Zero-downtime upgrades with logical replication
            <br />
            <small class="fg-mute"> Wed · 14:00 · Track A </small>
          </Result>
        </li>
      </ul>

      <p class="kicker">Speakers</p>
      <ul>
        <li>
          <Result href="#" icon={User}>
            Amara Okonkwo
            <br />
            <small class="fg-mute"> Speaker · 2 talks </small>
          </Result>
        </li>
      </ul>

      <p class="kicker">Logistics</p>
      <ul>
        <li>
          <Result href="#" icon={MapPin}>
            Venue & floor plans
            <br />
            <small class="fg-mute"> Attend · Getting around </small>
          </Result>
        </li>
      </ul>
    </div>

    <hr />

    <div class="footer">
      <strong>
        <a class="action-fg" href="/">See all results</a>
      </strong>
      for "{text?.trim() || "your search"}" ↵
    </div>
  </div>
</search>
