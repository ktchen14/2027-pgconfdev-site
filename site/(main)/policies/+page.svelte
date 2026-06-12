<script>
  import { resolve } from "$app/paths";
</script>

<style>
  header h1 {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .section-nav a {
    border-inline-start: 2px solid var(--border);
    border-radius: 0;
    margin-inline: 0;

    &[aria-current]:where(:not([aria-current="false"])) {
      background-color: var(--action-bg-tint);
    }

    &:is(:hover, [aria-current]:where(:not([aria-current="false"]))) {
      border-color: var(--action-fg);
    }
  }
</style>

<svelte:head>
  <title>Policies &amp; Privacy — PGConf.dev 2027</title>
  <meta
    name="description"
    content="PGConf.dev 2027 policies, privacy practices, and financial disclosure."
  />
</svelte:head>

<nav class="(main)" aria-label="Breadcrumb">
  <ol class="iconic over" style:gap="1em">
    <li aria-hidden="true">/</li>
    <li><a href={resolve("/about")}>About</a></li>
    <li aria-hidden="true">/</li>
    <li><a href="/">Policies &amp; privacy</a></li>
  </ol>
</nav>

<header class="(main)">
  <hgroup>
    <p class="action">About</p>
    <h1>Policies &amp; privacy.</h1>
  </hgroup>

  <p class="lede mute text">
    The required bits. How PGConf.dev is run, what we do with your data, and
    where the money goes.
  </p>
</header>

<hr class="section" />

<nav class="section-nav ( none@-64 note" aria-labelledby="about-nav">
  <h2 id="about-nav" class="over">About the Conference</h2>
  <ul>
    <li><a href={resolve("/about")}>About PGConf.dev</a></li>
    <li><a href={resolve("/team")}>Team</a></li>
    <li><a href={resolve("/conduct")}>Code of conduct</a></li>
    <li>
      <a href={resolve("/policies")} aria-current="page"
        >Policies &amp; privacy</a
      >
    </li>
  </ul>
</nav>

<nav aria-labelledby="on-this-page" class=") none@-48 note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#policies">Policies</a></li>
    <li><a class="li-number" href="#privacy">Privacy</a></li>
    <li><a class="li-number" href="#financial">Financial disclosure</a></li>
  </ol>
</nav>

<section id="policies" class="main">
  <hgroup>
    <p class="section-number">Policies</p>
    <h2>A PostgreSQL Community Event.</h2>
  </hgroup>

  <p>
    PGConf.dev is a recognised PostgreSQL Community Event and is run in
    accordance with the
    <a href="https://www.postgresql.org/about/policies/conferences/">
      PostgreSQL community conference policies</a
    >. The
    <a href={resolve("/conduct")}>code of conduct</a> applies at all conference venues
    and conference-related social events.
  </p>
</section>

<section id="privacy" class="main">
  <hgroup>
    <p class="section-number">Privacy</p>
    <h2>What we collect, and what we don't.</h2>
  </hgroup>

  <p>
    This site is hosted on GitHub Pages; see GitHub's
    <a
      href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
    >
      General Privacy Statement</a
    > for details on server-side logging.
  </p>

  <p>
    We measure traffic with <strong>Cloudflare Web Analytics</strong>, which
    keeps no client-side state and does not fingerprint visitors — there are no
    advertising cookies on this site. Our emails contain no tracking pixels or
    open-tracking links.
  </p>

  <p>
    The conference is organised by Slonik Events Canada, which follows its own
    <a href="https://www.pgevents.ca/about/privacypolicy/">Privacy Policy</a> for
    registration and attendee data.
  </p>
</section>

<section id="financial" class="main">
  <hgroup>
    <p class="section-number">Financial disclosure</p>
    <h2>Where the money goes.</h2>
  </hgroup>

  <p>
    PGConf.dev is underwritten by <strong>Slonik Events Canada</strong>, a
    Canadian non-profit, with support from our
    <a href={resolve("/sponsor")}>sponsors</a>. All proceeds support the
    PostgreSQL community as set out in the
    <a
      href="https://www.pgevents.ca/media/local/pdf/slonik-events-bylaws-2023.pdf"
    >
      Slonik Events bylaws</a
    >.
  </p>

  <p>
    Organisers and volunteers receive no remuneration for their work beyond free
    conference attendance. They may apply for travel sponsorship on the same
    terms as anyone else.
  </p>
</section>
