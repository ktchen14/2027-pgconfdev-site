import { createContext, type Snippet } from "svelte";

export interface Context {
  crumbs: Snippet[];
  nav: Snippet;
}

export const [getContext, setContext] = createContext<Context>();
