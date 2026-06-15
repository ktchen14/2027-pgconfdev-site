import { createContext, type Snippet } from "svelte";
import { SvelteSet } from "svelte/reactivity";

interface Context {
  nav: Snippet;
}

export const [getContext, setContext] = createContext<Context>();
