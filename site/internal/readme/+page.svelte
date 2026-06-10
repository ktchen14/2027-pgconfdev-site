<script lang="ts">
  import Demo from "./Demo.svelte";
</script>

<style>
  main {
    padding-block: var(--margin);
  }
</style>

<svelte:head>
  <title>CSS utilities — PGConf.dev 2027</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<main class="main">
  <hgroup>
    <p>Internal</p>
    <h1>CSS Utilities</h1>
    <p>
      Every reusable class, with the result on top and the markup below. Copy a
      snippet and go.
    </p>
  </hgroup>

  <section>
    <hgroup>
      <h2 class="section-number">Typography</h2>
      <p>Set the font, size, and emphasis of text.</p>
    </hgroup>

    <h3>Headings and their trimmings</h3>
    <p>
      Wrap a heading in an <code>&lt;hgroup&gt;</code> to add the bits that
      surround it. A paragraph <em>before</em> the heading becomes an
      <strong>eyebrow</strong> — small, uppercase, monospace — and a paragraph
      <em>after</em> it becomes a <strong>deck</strong>, the muted standfirst
      line. You don't add any classes; the <code>&lt;hgroup&gt;</code> does it.
    </p>

    <Demo
      code={`<hgroup>
  <p>Eyebrow</p>
  <h2>The headline sits in the middle</h2>
  <p>And the deck explains it just below.</p>
</hgroup>`}
    />

    <p>
      You can reach for the same two looks anywhere — not just in a heading —
      with the <code>.over</code> (eyebrow) and <code>.deck</code> classes.
    </p>

    <Demo
      code={`<p class="over">Standalone eyebrow</p>
<p class="deck">
  Standalone deck — a muted, slightly smaller line.
</p>`}
    />

    <h3>Emphasis and voice</h3>
    <p>
      A <code>.lead</code> paragraph opens a section in the serif display font,
      a touch larger than body text. Use <code>.mono</code> to switch a run of
      text to the monospace face for code-like values.
    </p>

    <Demo
      code={`<p class="lead">
  A lead paragraph introduces a section in the serif
  display font, a little larger than body text.
</p>`}
    />

    <Demo
      code={`<p>
  Wrap a value in <span class="mono">inline code voice</span>
  with .mono.
</p>`}
    />

    <h3>De-emphasis</h3>
    <p>
      <code>.note</code> dials a whole block back — smaller and muted — for
      asides and footnotes. It styles the block-level children inside it, so put
      your paragraphs and lists within.
    </p>

    <Demo
      code={`<div class="note">
  <p>
    The .note class de-emphasizes a whole block for
    asides and footnotes.
  </p>
</div>`}
    />

    <h3>Size</h3>
    <p>
      The size scale nudges any text up or down two steps in each direction,
      relative to its surroundings. Reach for these sparingly — prefer a real
      heading or <code>.deck</code> when one fits.
    </p>

    <Demo
      code={`<p class="size++">Largest (.size++)</p>
<p class="size+">Larger (.size+)</p>
<p>Default</p>
<p class="size-">Smaller (.size-)</p>
<p class="size--">Smallest (.size--)</p>`}
    />
  </section>
</main>
