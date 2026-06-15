import { createContext, type Snippet } from "svelte";
import { SvelteSet } from "svelte/reactivity";

interface NavSnippet extends Snippet {
  headerId: string;
}

interface Context {
  nav: NavSnippet;
}

export const [getContext, setContext] = createContext<Context>();
