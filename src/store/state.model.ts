import { ReverseResult, SearchItem } from "@/components/Map.model"

export declare interface BreakpointsSegments {
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
}
export declare interface BreakPoints extends BreakpointsSegments {
  lt: BreakpointsSegments
  gt: BreakpointsSegments
}

export declare type SelectedMarker = ReverseResult | SearchItem | null
