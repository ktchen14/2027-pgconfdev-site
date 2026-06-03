<script lang="ts">
  let {
    class: klass = undefined,
    href,
    icon: Icon,
    title,
    subtitle,
    search,
    ...rest
  } = $props();
</script>

<style>
  a {
    border-radius: var(--border-radius);
    color: var(--fg);
    gap: 0.75rem;
    margin-inline: -0.75rem;
    padding: 0.75rem;
    text-decoration: none;

    &:hover {
      background-color: var(--bg-tint);
    }
  }

  a > :global(svg) {
    background-color: var(--action-bg-mute);
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--border);
    color: var(--action-fg);
    height: 2.5rem;
    padding: 0.5rem;
    width: 2.5rem;
  }

  div {
    line-height: 1.2;
  }

  p {
    margin-block: 0;
  }

  .tt {
    font-weight: 500;
  }

  .sb {
    color: var(--fg-mute);
    font-size: 0.75rem;
  }
</style>

<a
  class={["iconic", klass]}
  {href}
  {...rest}
  onkeydown={(e) => {
    if (e.key === "Escape") search.focus();
  }}
>
  <Icon />
  <div>
    <p class="tt">{title}</p>
    <p class="sb">{subtitle}</p>
  </div>
</a>
