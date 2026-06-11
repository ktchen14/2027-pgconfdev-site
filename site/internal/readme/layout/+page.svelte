<script lang="ts">
  import Rule from "$lib/Rule.svelte";
  import Demo from "../Demo.svelte";
  import T from "../T.svelte";
</script>

<svelte:head>
  <title>CSS utilities: layout — PGConf.dev 2027</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<nav class=") none@-48 note" aria-labelledby="on-this-page">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#rule">Rule</a></li>
    <li><a class="li-number" href="#counters">Counters</a></li>
    <li><a class="li-number" href="#layout">Layout</a></li>
    <li><a class="li-number" href="#page-layout">Page layout</a></li>
  </ol>
</nav>

<hgroup class="main" style:margin-block-start="0">
  <p>Internal</p>
  <h1>CSS Utilities: Layout</h1>
  <p>
    Counters, the grid and flex layout system, and the page-layout classes.
    Every reusable class, with the result on top and the markup below.
  </p>
</hgroup>

<section id="rule" class="main">
  <hgroup>
    <h2 class="section-number">Rule</h2>
    <p>Divide sections with a horizontal rule.</p>
  </hgroup>

  <p>
    Use a plain <code>&lt;hr&gt;</code> for an unlabeled divider between
    sections. <T>Rule</T> is a Svelte component for the less common case where the
    divider needs a visible label.
  </p>

  <Demo source={`<hr />`} />

  <Demo
    source={`
import Rule from "$lib/Rule.svelte";

<Rule>Schedule</Rule>`}
  >
    <Rule>Schedule</Rule>
  </Demo>
</section>

<section id="counters" class="main">
  <hgroup>
    <h2 class="section-number">Counters</h2>
    <p>Automatically number sections and list items.</p>
  </hgroup>

  <p>
    <T>.section-number</T> prepends a section counter to an element in the form
    <code>§ 01 ·</code>. Each use increments automatically, so sections number
    themselves. Use it on the label paragraph inside an
    <code>&lt;hgroup&gt;</code>.
  </p>

  <div class="p" style="counter-reset: section">
    <Demo
      source={`
<hgroup>
  <p class="section-number">Introduction</p>
  <h2>Getting started</h2>
</hgroup>

<hgroup>
  <p class="section-number">Background</p>
  <h2>How it works</h2>
</hgroup>`}
    />
  </div>

  <p>
    <T>.li-number</T> prepends the list item's ordinal in monospace. Use it on navigation
    lists where the number should appear inside the link rather than outside it.
  </p>

  <Demo
    source={`
<nav>
  <ol>
    <li>
      <a class="li-number" href="#">Introduction</a>
    </li>
    <li>
      <a class="li-number" href="#">Background</a>
    </li>
    <li>
      <a class="li-number" href="#">Getting started</a>
    </li>
  </ol>
</nav>`}
  />
</section>

<section id="layout" class="main">
  <hgroup>
    <h2 class="section-number">Layout</h2>
    <p>Flex and grid containers, with responsive variants.</p>
  </hgroup>

  <p>
    All layout classes zero out the block margins of their direct children,
    since gap handles the spacing between items.
  </p>

  <h3>Responsive variants</h3>

  <p>
    Any layout class (and <T>none</T>) can be scoped to a viewport width range
    by appending <code>@min-max</code>. <code>min</code> and <code>max</code>
    are rem values; either can be omitted.
  </p>

  <Demo
    source={`
<!-- hidden below 48rem -->
<p class="none@-48">Hidden on narrow viewports</p>

<!-- hidden at 48rem and above -->
<p class="none@48-">Hidden on wide viewports</p>

<!-- flex row only at 48rem and above -->
<div class="flex@48-">
  <button>One</button>
  <button>Two</button>
</div>`}
  />

  <h3>None</h3>

  <p>
    <T>none</T> hides an element (<code>display: none</code>). Its main use is
    with a responsive variant to show or hide content at specific viewport
    widths.
  </p>

  <h3>Flex</h3>

  <p>
    <T>flex</T> makes a wrapping flex row with a standard gap between items. Use it
    for a row of buttons, badges, or other inline-sized elements that should wrap
    naturally.
  </p>

  <Demo
    source={`
<div class="flex">
  <button>Speakers</button>
  <button>Schedule</button>
  <button>Venue</button>
  <button>Workshops</button>
</div>`}
  />

  <h3>Grid</h3>

  <p>
    <T>grid+N</T> creates an auto-fit grid whose columns are at least
    <code>N</code> rem wide, filling the row and wrapping as needed. Use it for card
    grids where the number of columns should adapt to the available space.
  </p>

  <Demo
    source={`
<div class="grid+12">
  <div class="area">Speaker A</div>
  <div class="area">Speaker B</div>
  <div class="area">Speaker C</div>
  <div class="area">Speaker D</div>
</div>`}
  />

  <p>
    <T>grid/N</T> creates a fixed <code>N</code>-column grid. Use it when you
    need a specific number of columns regardless of container width.
  </p>

  <Demo
    source={`
<div class="grid/3">
  <div class="area">Column one</div>
  <div class="area">Column two</div>
  <div class="area">Column three</div>
</div>`}
  />

  <h3>Subgrid</h3>

  <p>
    <T>subgrid</T> makes an element adopt its parent grid's column tracks, letting
    its children align with the outer grid. Use it on a grid item that needs to place
    children into the parent's columns.
  </p>

  <Demo
    source={`
<div class="grid/3">
  <div class="subgrid column-span-2">
    <div class="area">Spans col 1</div>
    <div class="area">Spans col 2</div>
  </div>
  <div class="area">Col 3</div>
</div>`}
  />

  <h3>Column placement</h3>

  <p>
    <T>column-N</T> places a grid item in column <code>N</code>.
    <T>column-span-N</T> spans a grid item across <code>N</code> columns.
  </p>

  <Demo
    source={`
<div class="grid/3">
  <div class="area">Col 1</div>
  <div class="area">Col 2</div>
  <div class="area column-1">Forced to col 1</div>
  <div class="area column-span-2">Spans cols 1–2</div>
  <div class="area">Col 3</div>
</div>`}
  />
</section>
