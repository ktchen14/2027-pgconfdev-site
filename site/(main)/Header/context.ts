import { createContext } from "svelte";

export interface Header {
  menu: string | null;
}

export interface Search {
  node: HTMLInputElement | undefined;
}

export const [getHeaderContext, setHeaderContext] = createContext<Header>();
export const [getSearchContext, setSearchContext] = createContext<Search>();
