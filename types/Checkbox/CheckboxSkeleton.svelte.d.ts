/// <reference types="svelte" />
import type { SvelteComponent } from "svelte";

export interface CheckboxSkeletonProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class CheckboxSkeleton extends SvelteComponent<
  CheckboxSkeletonProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
  },
  {}
> {}
