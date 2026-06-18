<script lang="ts">
  import { GitHub, Mastodon } from "$lib/icon";
  import Link from "$lib/Link";
</script>

<style>
  :where(footer) {
    justify-content: space-between;
  }
</style>

<footer class="(main) flex@48- margin-gap note">
  <p>
    Follow us on
    <Link href={Mastodon.href} aria-label="Mastodon">
      Mastodon<Mastodon
        class="size"
        style="margin-left: 0.25em; vertical-align: middle;"
      />
    </Link> for the latest news on PGConf.dev 2027
  </p>
  <p>Fork this site on <GitHub /></p>
</footer>
