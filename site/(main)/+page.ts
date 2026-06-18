import type { JSON as Mastodon } from "tsl-mastodon-api";
import type { PageLoad } from "./$types";

const STATUSES =
  "https://mastodon.social/api/v1/accounts/111687888257105600/statuses";

const URLS = [
  Object.assign(new URL(STATUSES), {
    search: new URLSearchParams({ pinned: "true", limit: "6" }),
  }),
  Object.assign(new URL(STATUSES), {
    search: new URLSearchParams({
      exclude_reblogs: "true",
      exclude_replies: "true",
      limit: "6",
    }),
  }),
];

export const load: PageLoad = ({ fetch }) => {
  const statuses = Promise.all(URLS.map((u) => fetch(u))).then(
    async (responses) => {
      const byId = new Map<string, Mastodon.Status>();
      for (const response of responses) {
        if (!response.ok)
          throw new Error(`Failed to load statuses: ${response.status}`);
        for (const status of await response.json()) byId.set(status.id, status);
      }
      return [...byId.values()].slice(0, 6);
    },
  );

  return { statuses };
};
