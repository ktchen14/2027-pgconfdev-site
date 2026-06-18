<script lang="ts">
  import type { ClassValue, HTMLAttributes } from "svelte/elements";
  import type { JSON as Mastodon } from "tsl-mastodon-api";

  type Props = HTMLAttributes<HTMLElement> & {
    class?: ClassValue;
    status: Mastodon.Status;
  };
  const { class: klass, status, ...rest }: Props = $props();

  const [attachment] = $derived(status.media_attachments);
</script>

<style>
  article {
    background-color: var(--static-bg);
    flex-flow: column;
    gap: 1rem;
  }

  .hint {
    color: var(--fg-tint);
  }

  .icon {
    size: 3rem;
  }

  hgroup {
    margin-inline-end: auto;
    overflow-wrap: anywhere;
  }

  [data-attachment] {
    grid-row: span 2;
  }
</style>

<article
  class={["flex", "border", "size-", klass]}
  data-attachment={attachment !== undefined}
  {...rest}
>
  <header class="iconic" style:gap="1em">
    <img
      class="icon"
      src={status.account.avatar}
      alt="Avatar of {status.account.username}"
    />

    <hgroup class="h6">
      <h3>{status.account.display_name}</h3>
      <p class="hint mono">@{status.account.username}</p>
    </hgroup>

    <time class="hint">5d</time>
  </header>

  <div class="p" style:margin-block-end="auto">
    {@html status.content}

    {#if attachment !== undefined}
      <img src={attachment.preview_url} alt={attachment.description} />
    {/if}
  </div>

  <hr aria-hidden="true" />

  <footer class="flex">
    <span>↺ {status.replies_count}</span>
    <span>↺ {status.reblogs_count}</span>
    <span>★ {status.favourites_count}</span>
  </footer>
</article>
