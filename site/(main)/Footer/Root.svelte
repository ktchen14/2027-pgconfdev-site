<script lang="ts">
  import { GitHub, Mastodon } from "$lib/icon";
  import Link from "$lib/Link";
</script>

<style>
  footer {
    justify-content: space-between;

    :global(.icon) {
      margin-inline-start: 0.25em;
    }
  }
</style>

<footer class="(main) flex@48- margin-gap note">
  <p>
    Follow us on
    <Link href={Mastodon.href} aria-label="Mastodon">
      Mastodon<Mastodon class="size-" />
    </Link> for the latest news on PGConf.dev 2027
  </p>

  <p>
    Fork this site on
    <Link href={GitHub.href} aria-label="GitHub">
      GitHub<GitHub class="size-" />
    </Link>
  </p>
</footer>
