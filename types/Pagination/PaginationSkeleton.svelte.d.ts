/// <reference types="svelte" />
import type { SvelteComponent } from "svelte";

export interface PaginationSkeletonProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["div"]> {}

export default class PaginationSkeleton extends SvelteComponent<
  PaginationSkeletonProps,
  {
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseleave: WindowEventMap["mouseleave"];
  },
  {}
> {}
