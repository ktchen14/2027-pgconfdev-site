import { createContext, type Component, type Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

interface Context {
  /** Breadcrumb `<nav>` component of the layout. */
  BreadcrumbNav: Component<HTMLAttributes<HTMLElement>>;

  /** Section navigation link list of the layout. */
  nav: Snippet;
}

export const [getContext, setContext] = createContext<Context>();
