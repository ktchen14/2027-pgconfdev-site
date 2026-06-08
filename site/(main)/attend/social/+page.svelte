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
      background-color: var(--action-bg-mute);
    }

    &:is(:hover, [aria-current]:where(:not([aria-current="false"]))) {
      border-color: var(--action-fg);
    }
  }
</style>

<svelte:head>
  <title>Social Events — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Social events at PGConf.dev 2027 — welcome breakfast, group run, reception, community dinner, and the conference pub."
  />
</svelte:head>

<nav class="merge-both" aria-label="Breadcrumb">
  <ol class="iconic over" style:gap="1em">
    <li aria-hidden="true">/</li>
    <li><a href={resolve("/attend")}>Attend</a></li>
    <li aria-hidden="true">/</li>
    <li><a href="/">Social events</a></li>
  </ol>
</nav>

<header class="merge-both">
  <hgroup>
    <p class="action">Attend · Social</p>
    <h1>Social events.</h1>
  </hgroup>

  <p class="lede mute text">
    PGConf.dev's hallway track is as valuable as the scheduled program. These
    events are how the contributor community actually connects — don't skip
    them.
  </p>
</header>

<hr class="margin-section" />

<nav class="section-nav float-left none[-64] note" aria-labelledby="attend-nav">
  <h2 id="attend-nav" class="over">Attend</h2>
  <ul>
    <li><a href={resolve("/attend")}>Venue</a></li>
    <li><a href={resolve("/attend/travel")}>Travel &amp; hotels</a></li>
    <li>
      <a href={resolve("/attend/social")} aria-current="page">Social events</a>
    </li>
    <li><a href={resolve("/attend/volunteer")}>Volunteer</a></li>
  </ul>
</nav>

<nav aria-labelledby="on-this-page" class="float-right none[-48] note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a href="#tuesday">Tuesday · Tutorial day</a></li>
    <li><a href="#wednesday">Wednesday · First talk day</a></li>
    <li><a href="#thursday">Thursday · Second talk day</a></li>
    <li><a href="#all-week">All week</a></li>
  </ol>
</nav>

<section class="main">
  <div class="panel fill-action edge-action">
    <h3 class="h6">Details coming soon</h3>
    <p>
      Specific venues and signup links for 2027 will be posted closer to the
      conference. The events below are modeled on 2026 and may change. Subscribe
      to the mailing list for announcements.
    </p>
  </div>
</section>

<section id="tuesday">
  <hgroup class="main">
    <p>§ 01 · Tuesday · 18 May</p>
    <h2>Tutorial day social.</h2>
  </hgroup>

  <div class="auto-grid-16 merge-both">
    <div class="note panel border edge-insert" id="breakfast">
      <hgroup>
        <p class="over">Welcome breakfast</p>
        <h3 class="h4">Newcomer Welcome Breakfast</h3>
        <p class="mono">Tue · 07:30 · Registration area</p>
      </hgroup>
      <p>
        Meet other newcomers alongside experienced community members before the
        day gets started. No signup required — just show up. Coffee, pastries,
        and good conversation.
      </p>
    </div>

    <div class="note panel border edge-insert" id="run">
      <hgroup>
        <p class="over">Group run</p>
        <h3 class="h4">Social Run</h3>
        <p class="mono">Tue · 17:30 · Main entrance</p>
      </hgroup>
      <p>
        A recreational run through the streets of Montréal and along the
        waterfront. Multiple pace groups, 5–10 km depending on interest. Running
        shoes required; bring your conference badge for meetup identification.
      </p>
    </div>
  </div>
</section>

<section id="wednesday">
  <hgroup class="main">
    <p>§ 02 · Wednesday · 19 May</p>
    <h2>First talk day.</h2>
  </hgroup>

  <div class="merge-both">
    <div class="note panel border edge-action" id="reception">
      <hgroup>
        <p class="over">Social reception</p>
        <h3 class="h4">Evening Reception</h3>
        <p class="mono">Wed · 18:00 · Venue TBD · Near conference</p>
      </hgroup>
      <p>
        Appetizers and two complimentary drinks included with your registration.
        A chance to decompress after day one of talks. Bring your badge.
        Additional drinks available for purchase.
      </p>
    </div>
  </div>
</section>

<section id="thursday">
  <hgroup class="main">
    <p>§ 03 · Thursday · 20 May</p>
    <h2>Second talk day.</h2>
  </hgroup>

  <div class="merge-both">
    <div class="note panel border edge-action" id="dinner">
      <hgroup>
        <p class="over">Community dinner</p>
        <h3 class="h4">Conference Dinner — Old Montréal</h3>
        <p class="mono">Thu · 19:30 · Restaurant TBD · Separate signup</p>
      </hgroup>
      <p>
        The traditional conference dinner, held at a venue in Old Montréal.
        Separate signup required; subsidized by sponsorship. Limited to 250
        seats. Signup opens with early-bird registration.
      </p>
    </div>
  </div>
</section>

<section id="all-week">
  <hgroup class="main">
    <p>§ 04 · All week</p>
    <h2>Ongoing throughout the conference.</h2>
  </hgroup>

  <div class="auto-grid-16 merge-both">
    <div class="note panel border" id="pub">
      <hgroup>
        <p class="over">Conference pub</p>
        <h3 class="h4">Hallway pub</h3>
        <p class="mono">Evenings · Venue TBD · Near conference</p>
      </hgroup>
      <p>
        An informal after-hours gathering spot near the venue. No signup, no
        agenda — just the contributor community continuing conversations from
        the day. Venue will be announced at registration.
      </p>
    </div>

    <div class="note panel border edge-insert">
      <hgroup>
        <p class="over">Meet &amp; Eat</p>
        <h3 class="h4">Small-group dinners</h3>
        <p class="mono">Tue &amp; Thu evenings · Various restaurants</p>
      </hgroup>
      <p>
        Self-organized dinners in groups of 8. Sign up via the form at
        registration, get assigned a group and a restaurant, meet at the
        registration desk at 17:00. Self-pay. A great way to have an actual
        conversation with people you've only known by email address.
      </p>
    </div>
  </div>
</section>

<section class="main">
  <div class="panel fill-insert edge-insert">
    <h3 class="h6">Signup forms</h3>
    <p>
      Signup links for the dinner, Meet &amp; Eat, and any ticketed events will
      be available at the registration desk and posted on the conference Discord
      server. Details will also be emailed to registered attendees before the
      conference.
    </p>
  </div>
</section>
