import { createContext } from "svelte";

interface Header {
  menu: string | null;
}

interface Search {
  node: HTMLInputElement;
}

export const [getHeaderContext, setHeaderContext] = createContext<Header>();
export const [getSearchContext, setSearchContext] = createContext<Search>();
