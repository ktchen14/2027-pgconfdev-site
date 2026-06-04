import { createContext } from "svelte";

interface Header {
  menu: string | null;
}

export const [getHeaderContext, setHeaderContext] = createContext<Header>();
