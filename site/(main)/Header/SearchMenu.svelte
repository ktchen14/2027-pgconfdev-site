<script lang="ts">
  import { List, MapPin, User } from "@lucide/svelte";
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
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
  <p class="over">Talks</p>
  <ul>
    <li>
      <Result href="#" icon={List}>
        Zero-downtime upgrades with logical replication
        <br />
        <small>Wed · 14:00 · Track A</small>
      </Result>
    </li>
  </ul>

  <p class="over">Speakers</p>
  <ul>
    <li>
      <Result href="#" icon={User}>
        Amara Okonkwo
        <br />
        <small>Speaker · 2 talks</small>
      </Result>
    </li>
  </ul>

  <p class="over">Logistics</p>
  <ul>
    <li>
      <Result href="#" icon={MapPin}>
        Venue &amp; floor plans
        <br />
        <small>Attend · Getting around</small>
      </Result>
    </li>
  </ul>

  <hr />

  <p style:color="var(--fg-tint)">
    <strong>
      <Link class="action" href={resolve("/")}>See all results</Link>
    </strong>
    for "{text?.trim() || "your search"}" ↵
  </p>
</Menu>
