<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import T from "../T.svelte";
</script>

<style>
  /* The regions as one map: bracket symbol, region name, and breakpoint. */
  .region-map {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 2.5fr 1fr;
    text-align: center;
  }

  .region-map > * {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: var(--gap) 0.5rem;
  }

  .region-map .faint {
    border-style: dashed;
    color: var(--fg-mute);
  }

  .demo {
    border: 1px dashed var(--border-bold);
    padding: var(--gap);
  }

  .demo > .cell {
    background-color: var(--action-bg-tint);
    border-radius: var(--radius);
    padding: 0.75em 1em;
    text-align: center;
  }

  /* Footprint pictures: a mini three-column page with the used cells filled. */
  .on,
  .off {
    block-size: 1.75rem;
    border-radius: 2px;
  }

  .on {
    background-color: var(--action-fg);
  }

  .off {
    border: 1px dashed var(--border);
  }

  /* Compact overview of all six runs; smaller footprints than the per-section
     examples. */
  .run-list .on,
  .run-list .off {
    block-size: 1rem;
  }

  .run-list figcaption {
    margin-block-start: 0.5rem;
    text-align: center;
  }
</style>

<svelte:head>
  <title>CSS utilities: page layout — PGConf.dev 2027</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<nav class=") note" aria-labelledby="on-this-page">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#the-three-regions">The three regions</a></li>
    <li>
      <a class="li-number" href="#a-class-is-a-placement">A class is a placement</a>
    </li>
    <li><a class="li-number" href="#your-two-workhorses">Two workhorses</a></li>
    <li><a class="li-number" href="#sidebars">Sidebars</a></li>
    <li>
      <a class="li-number" href="#spanning-into-one-sidebar">Spanning one sidebar</a>
    </li>
    <li><a class="li-number" href="#listing-fallbacks">Listing fallbacks</a></li>
    <li>
      <a class="li-number" href="#place-a-blocks-children">The *: variant</a>
    </li>
    <li>
      <a class="li-number" href="#matching-other-classes-to-the-bands">
        Breakpoint aliases
      </a>
    </li>
  </ol>
</nav>

<hgroup class="main" style:margin-block-start="0">
  <p>Internal</p>
  <h1>CSS Utilities: Page layout</h1>
  <p>
    Place a top-level block in the centre column, in a sidebar, or spanning the
    whole page.
  </p>
</hgroup>

<p class="main">
  Every page on this site, this one included, is built from a handful of
  placement classes. They decide whether a block sits in the reading column,
  rides in a sidebar, or stretches across the page, and how it rearranges as the
  window grows and shrinks.
</p>

<section id="the-three-regions" class="main">
  <hgroup>
    <h2 class="section-number">The three regions</h2>
    <p>A centre column, with two sidebars that appear as the window widens.</p>
  </hgroup>

  <p>
    The <strong>main</strong> column is always there. A <strong>right</strong>
    sidebar appears once the window reaches 48rem, and a <strong>left</strong>
    one joins it at 64rem. Each region has a name in placement classes too: the
    brackets <code>(</code> and <code>)</code> for the sidebars,
    <code>main</code> for the centre.
  </p>

  <div class="region-map note p">
    <div class="faint">
      <code class="size++">(</code><br />Left<br /><small>≥ 64rem</small>
    </div>
    <div>
      <code class="size++">main</code><br />Centre<br /><small>always</small>
    </div>
    <div class="faint">
      <code class="size++">)</code><br />Right<br /><small>≥ 48rem</small>
    </div>
  </div>

  <p>
    The left sidebar has a higher minimum width than the right, so the right is
    always present whenever the left is. That leaves only three states:
  </p>

  <ul>
    <li><strong>Main alone</strong> on a phone</li>
    <li><strong>Main and right</strong> on a tablet</li>
    <li><strong>All three</strong> on a desktop</li>
  </ul>

  <p class="note">
    You apply these classes to the direct children of a page's
    <code>&lt;main&gt;</code>.
  </p>
</section>

<section id="a-class-is-a-placement" class="main">
  <hgroup>
    <h2 class="section-number">A class is a placement</h2>
    <p>Name the run of regions a block should cover, as a single class.</p>
  </hgroup>

  <p>
    A placement class names a <strong>run</strong> of adjacent regions, with the
    brackets as its left and right ends. The six possible runs are every
    placement there is: <code>(</code>, <code>main</code>, <code>)</code>,
    <code>(main</code>, <code>main)</code>, and <code>(main)</code>. Each
    section below puts one or two of them to work.
  </p>

  <p>
    A block fills the part of its run that <strong
      >exists at the current width</strong
    >, and no more. You never set widths or breakpoints yourself.
  </p>

  <p>
    Widen the window and a run spreads into a sidebar as it appears; narrow it
    and the run gives up the columns that have gone. So <code>(main)</code> is
    full width on a desktop and plain main on a phone, while a lone
    <code>)</code> shows from a tablet up but is simply absent on a phone.
  </p>

  <p class="note">
    You only ever write a single <code>(</code> and a single <code>)</code> on a block.
    A run has one left end and one right end, and even the fallback lists below keep
    to one of each, so two placements can never fight over the same sidebar. There
    is no more syntax than that.
  </p>
</section>

<section id="your-two-workhorses" class="*:main">
  <hgroup>
    <h2 class="section-number">Your two workhorses</h2>
    <p>
      <code>main</code> for the reading column, <code>(main)</code> for full width.
    </p>
  </hgroup>

  <p>Two of the six runs do most of the work on a typical page.</p>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="off"></div>
      <div class="on column-span-2"></div>
      <div class="off"></div>
    </div>

    <figcaption style:text-align="center">
      <T>main</T> &mdash; the centre column alone.
    </figcaption>
  </figure>

  <p>
    <T>main</T> keeps a block in the centre reading column and leaves the sidebars
    free. Use it for body copy, article sections, anything text-heavy.
  </p>

  <div class="demo p">
    <p class="over">class "main"</p>
    <h3 class="h4">A working conference for the people building Postgres</h3>

    <p>
      PGConf.dev was founded in 2024 to fill a specific gap: a yearly room where
      PostgreSQL contributors and the developers integrating Postgres into other
      systems could spend four days together, without the conference circuit's
      usual layer of polish.
    </p>

    <p>
      The format borrows from academic conferences: proposals are reviewed by a
      program committee, talks are technical, and a third of the schedule is
      unconference.
    </p>
  </div>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="on"></div>
      <div class="on column-span-2"></div>
      <div class="on"></div>
    </div>

    <figcaption style:text-align="center">
      <T>(main)</T> &mdash; all three regions.
    </figcaption>
  </figure>

  <p>
    <T>(main)</T> is a box that spans the <em>whole</em> content area, soaking
    up the sidebars when they exist. Reach for it on headers, footers, heroes,
    and full-bleed sections. Both examples are live; widen past 64rem to watch
    <code>(main)</code> reach past <code>main</code> into the sidebar space.
  </p>

  <div class="(main) demo p">
    <p class="over">class "(main)"</p>
    <div class="grid+12">
      <figure>
        <div class="action h2">~600</div>
        <figcaption class="over">Attendees</figcaption>
      </figure>
      <figure>
        <div class="action h2">3</div>
        <figcaption class="over">Parallel tracks</figcaption>
      </figure>
      <figure>
        <div class="action h2">42</div>
        <figcaption class="over">Talks &amp; tutorials</figcaption>
      </figure>
      <figure>
        <div class="action h2">4</div>
        <figcaption class="over">Days</figcaption>
      </figure>
    </div>
  </div>

  <p>
    A <code>(main)</code> box is a single block by default. Put a grid inside it
    (for example <code>grid+16</code> or <code>grid/3@)</code>) when you want
    its contents laid out in cards or columns, exactly as the
    <Link href={resolve("/")}>landing page</Link> does for its sponsor and gallery
    sections.
  </p>
</section>

<section id="sidebars" class="*:main">
  <hgroup>
    <h2 class="section-number">Sidebars: <code>(</code> and <code>)</code></h2>
    <p>Navigation and asides that ride alongside the main column.</p>
  </hgroup>

  <p>
    The single-region runs <T>(</T> and <T>)</T> are how you put a block beside your
    content rather than in it: an "On this page" table of contents, a section navigation,
    a pull-quote, an at-a-glance box.
  </p>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="on"></div>
      <div class="off column-span-2"></div>
      <div class="off"></div>
    </div>

    <figcaption>
      <T>(</T> &mdash; the left sidebar alone.
    </figcaption>
  </figure>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="off"></div>
      <div class="off column-span-2"></div>
      <div class="on"></div>
    </div>

    <figcaption style:text-align="right">
      <T>)</T> &mdash; the right sidebar alone.
    </figcaption>
  </figure>

  <aside class=") note border p">
    <p class="over">On this page</p>
    <p>
      A <code>)</code> aside. It rides in the right sidebar from 48rem up and is hidden
      below it.
    </p>
  </aside>

  <aside class="( note border p">
    <p class="over">Section nav</p>
    <p>
      A <code>(</code> aside. It appears in the left sidebar from 64rem up.
    </p>
  </aside>

  <p>
    Being a run of one region, a sidebar block shows up only where that sidebar
    exists and is absent otherwise, so nothing is needed to hide it on a phone.
    <code>)</code> appears from 48rem, <code>(</code> from 64rem.
  </p>

  <p>
    If you want it to appear inline in the main column on a narrow screen instead
    of vanishing, give it <code>main</code> as a fallback too (see
    <a href="#listing-fallbacks">Listing fallbacks</a> below) — usually with the
    <Link href="text#spacing">p</Link> utility for paragraph spacing, as in
    <code>main )</code>.
  </p>

  <p>
    The usual companion is just <Link href="text#prose">note</Link>, for the
    muted, smaller sidebar styling. The CSS-Utilities list on the left of this
    page is placed with <code>(</code>; the "On this page" navs use
    <code>)</code>.
  </p>
</section>

<section id="spanning-into-one-sidebar" class="*:main">
  <hgroup>
    <h2 class="section-number">Spanning into one sidebar</h2>
    <p>
      <code>(main</code> and <code>main)</code> reach a box into just one side.
    </p>
  </hgroup>

  <p>
    Between plain <code>main</code> and the full-width <code>(main)</code> sit
    the two half-spans. <T>main)</T> runs from main through the right sidebar;
    <T>(main</T> runs from the left through main. Each is one block that widens to
    take in its sidebar where there is room and stays plain main where there isn't.
  </p>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="on"></div>
      <div class="on column-span-2"></div>
      <div class="off"></div>
    </div>

    <figcaption>
      <T>(main</T> &mdash; left through main.
    </figcaption>
  </figure>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="off"></div>
      <div class="on column-span-2"></div>
      <div class="on"></div>
    </div>

    <figcaption style:text-align="right">
      <T>main)</T> &mdash; main through right.
    </figcaption>
  </figure>

  <p>
    Reach for them when a band should lean into one margin but not both, such as
    a call-for-proposals banner or a sponsors strip.
  </p>

  <div class="main) demo p">
    <p class="over">class "main)"</p>
    <h3 class="h4">Call for proposals</h3>
    <p>
      Submit a talk, tutorial, or unconference topic by 14 February. This banner
      runs from main into the right sidebar, so on a desktop it reaches wider than
      the reading column.
    </p>
  </div>

  <div class="(main demo p">
    <p class="over">class "(main"</p>
    <h3 class="h4">Sponsors</h3>
    <p>
      PGConf.dev is non-profit; sponsors cover the venue, A/V, and scholarships.
      The same band reaching the other way, from the left sidebar through main.
    </p>
  </div>

  <p>
    A half-span is most useful paired with <Link href="layout">columnar</Link>,
    which turns its regions into aligned grid columns. The
    <Link href={resolve("/about")}>About page</Link> timeline does this, lining
    each year up in one column and its description in the next. The box below is
    a live <code>main) columnar</code>: two columns from 48rem up, stacked when
    narrower.
  </p>

  <div class="main) columnar demo">
    <p class="cell">Main column</p>
    <p class="cell">Right column</p>
  </div>
</section>

<section id="listing-fallbacks" class="*:main">
  <hgroup>
    <h2 class="section-number">Listing fallbacks</h2>
    <p>Give a block several placements; it takes the best one available.</p>
  </hgroup>

  <p>
    Everything so far has been one placement. Put a space between two of them
    and you have handed the block <strong>two placements</strong> to choose from:
    it renders in the best one available at the current width, re-choosing as the
    window changes.
  </p>

  <p>
    Since the space is what separates placements, it is the whole difference
    between spanning and choosing:
  </p>

  <p>
    <code>main)</code> with no space is one placement: a single run spanning main
    and the right sidebar at once.
  </p>

  <p>
    <code>main )</code> with a space is two placements, <code>main</code> and
    <code>)</code>: the block takes the right sidebar when it fits, otherwise
    main.
  </p>

  <p>
    That second one is the useful "at a glance" pattern: a summary that sits
    inline under the heading on a phone, then moves up into the right sidebar
    when there is room. The box here is a live <code>main )</code>.
  </p>

  <aside class="main ) note area border">
    <p class="over">At a glance · <code>main )</code></p>
    <dl class="dedent">
      <div class="p">
        <dt class="over">Dates</dt>
        <dd>18–21 May 2027</dd>
      </div>
      <div class="p">
        <dt class="over">Venue</dt>
        <dd>Palais des congrès de Montréal</dd>
      </div>
      <div class="p">
        <dt class="over">Format</dt>
        <dd>Tutorial day, two talk days, an unconference day</dd>
      </div>
    </dl>
  </aside>

  <p>
    The same works on the left. <code>( main</code> chooses the left sidebar when
    it exists, else main, which makes a tidy margin note beside the text.
  </p>

  <aside class="( main note border">
    <p class="over"><code>( main</code></p>
    <p>
      PGCon ran in Ottawa from 2007 to 2023, sixteen editions before PGConf.dev
      picked up the thread.
    </p>
  </aside>

  <p>
    List all three, <code>( main )</code>, for "left, else right, else main": it
    prefers the left sidebar, accepts the right when the left is gone, and drops
    inline on a phone.
  </p>

  <aside class="( main ) note border">
    <p class="over"><code>( main )</code></p>
    <p>
      Left sidebar on a desktop, right sidebar on a tablet, inline on a phone.
    </p>
  </aside>

  <aside class="note">
    <p>
      When a layout looks wrong, check your spaces first: a stray space turns one
      spanning placement into two competing ones.
    </p>
  </aside>
</section>

<section id="place-a-blocks-children" class="main">
  <hgroup>
    <h2 class="section-number">Place a block's children: <code>*:</code></h2>
    <p>Lay out an article with asides beside it, in one wrapper.</p>
  </hgroup>

  <p>
    Prefix any placement with <code>*:</code> to apply it to a block's
    <em>children</em> instead of the block itself.
  </p>

  <p>
    <T>*:main</T> is the handy one. Wrap a section in it and every child lands in
    the main column; then drop a <code>(</code> or <code>)</code> on the asides
    you want pushed into a margin. The <Link href={resolve("/about")}
      >About page</Link
    > uses it to set a marginal note beside its history text:
  </p>

  <pre><code
      >{`<section class="*:main">
  <hgroup>...</hgroup>

  <!-- floats into the left margin -->
  <aside class="( note">...</aside>

  <!-- stays in main -->
  <p>...</p>
</section>`}</code
    ></pre>

  <p>
    The section below does exactly that. Widen past 64rem to see the note slide
    out.
  </p>
</section>

<section class="*:main">
  <p>
    This paragraph sits in the main column because its parent section is
    <code>*:main</code>. The note beside it is a child with a <code>(</code> of
    its own, so on a wide screen it floats into the left sidebar. Because
    <code>*:main</code> also gives it main, it tucks back inline lower down
    instead of disappearing as a bare <code>(</code> would.
  </p>

  <aside class="( note border">
    <p class="over">Aside</p>
    <p>
      A <code>(</code> child of a <code>*:main</code> section.
    </p>
  </aside>

  <p>
    Without <code>*:main</code> you would have to write <code>main</code> on
    every paragraph and <code>div</code> in the section. The variant saves you the
    repetition.
  </p>
</section>

<section id="matching-other-classes-to-the-bands" class="main">
  <hgroup>
    <h2 class="section-number">Matching other classes to the bands</h2>
    <p>Use <code>@)</code> and <code>@(</code> as breakpoint shorthands.</p>
  </hgroup>

  <p>
    Any responsive variant (see the <Link href="layout">Layout</Link> page) can be
    tied to the layout's own breakpoints. <code>@)</code> means "from 48rem",
    where the right sidebar appears; <code>@(</code> means "from 64rem", where the
    left one does.
  </p>

  <p>
    So <code>grid/3@)</code> becomes three columns exactly when the right sidebar
    arrives. Reaching for these instead of raw rem values keeps a block tied to the
    regions if the breakpoints ever move.
  </p>
</section>
