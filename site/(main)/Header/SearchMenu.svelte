<script lang="ts">
  import { List, MapPin, User } from "@lucide/svelte";
  import Menu from "./Menu.svelte";
  import Result from "./Result.svelte";

  const { text, ...rest } = $props();
</script>

<style>
  :global(.search-menu) {
    font-size: 0.875rem;
    margin-top: 1.5rem;

    @media (width >= 48rem) {
      margin-top: 0.5rem;
    }
  }
</style>

<Menu class="search-menu" data-open={text ? true : undefined} {...rest}>
  <p class="kicker">Talks</p>
  <ul>
    <li>
      <Result href="#" icon={List}>
        Zero-downtime upgrades with logical replication
        <br />
        <small class="fg-mute">Wed · 14:00 · Track A</small>
      </Result>
    </li>
  </ul>

  <p class="kicker">Speakers</p>
  <ul>
    <li>
      <Result href="#" icon={User}>
        Amara Okonkwo
        <br />
        <small class="fg-mute">Speaker · 2 talks</small>
      </Result>
    </li>
  </ul>

  <p class="kicker">Logistics</p>
  <ul>
    <li>
      <Result href="#" icon={MapPin}>
        Venue &amp; floor plans
        <br />
        <small class="fg-mute">Attend · Getting around</small>
      </Result>
    </li>
  </ul>

  <hr />

  <p style:color="var(--fg-tint)">
    <strong>
      <a class="action-fg" href="/">See all results</a>
    </strong>
    for "{text?.trim() || "your search"}" ↵
  </p>
</Menu>
