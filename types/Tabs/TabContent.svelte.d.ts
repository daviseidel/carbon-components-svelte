/// <reference types="svelte" />
import type { SvelteComponent } from "svelte";

export interface TabContentProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {
  /**
   * Set an id for the top-level element
   * @default "ccs-" + Math.random().toString(36)
   */
  id?: string;
}

export default class TabContent extends SvelteComponent<
  TabContentProps,
  {},
  { default: {} }
> {}
