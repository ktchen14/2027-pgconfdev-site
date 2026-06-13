import { createRawSnippet } from "svelte";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-svelte";
import Link from "./Link.svelte";

// `page` is mutable so each test can set the "current" URL before rendering.
const { page } = vi.hoisted(() => ({
  page: { url: new URL("https://pgconf.dev/") },
}));
vi.mock("$app/state", () => ({ page }));

const children = createRawSnippet(() => ({
  render: () => `<span>label</span>`,
}));

const link = () => document.body.querySelector("a")!;

beforeEach(() => {
  page.url = new URL("https://pgconf.dev/");
});

describe("Link", () => {
  it("marks the active page with aria-current", () => {
    page.url = new URL("https://pgconf.dev/program");
    render(Link, { href: "/program", children });
    expect(link().getAttribute("aria-current")).toBe("page");
  });

  it("omits aria-current on other pages", () => {
    page.url = new URL("https://pgconf.dev/program");
    render(Link, { href: "/cfp", children });
    expect(link().getAttribute("aria-current")).toBe(null);
  });

  it("keeps internal links in the same tab", () => {
    render(Link, { href: "/cfp", children });
    expect(link().getAttribute("target")).toBe(null);
  });

  it("opens external links in a new tab", () => {
    render(Link, { href: "https://example.com/", children });
    expect(link().getAttribute("target")).toBe("_blank");
  });

  it("lets an explicit target prop win", () => {
    // `target` is also a render option, so nest props to disambiguate.
    render(Link, {
      props: { href: "https://example.com/", target: "_self", children },
    });
    expect(link().getAttribute("target")).toBe("_self");
  });
});
