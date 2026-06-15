import { createContext, type Component } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

interface Context {
  /** Breadcrumb `<nav>` component of the layout. */
  BreadcrumbNav: Component<HTMLAttributes<HTMLElement>>;

  /** Section `<nav>` component of the layout. */
  SectionNav: Component<HTMLAttributes<HTMLElement>>;
}

export const [getContext, setContext] = createContext<Context>();
