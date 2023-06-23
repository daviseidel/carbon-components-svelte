/// <reference types="svelte" />
import type { SvelteComponent } from "svelte";

export interface ContextMenuGroupProps {
  /**
   * @default []
   */
  selectedIds?: ReadonlyArray<string>;

  /**
   * Specify the label text
   * @default ""
   */
  labelText?: string;
}

export default class ContextMenuGroup extends SvelteComponent<
  ContextMenuGroupProps,
  {},
  { default: {} }
> {}
