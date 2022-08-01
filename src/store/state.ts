import { ReverseResult } from "@/components/Map.model"
import { breakpointsSegments } from "@/parameters"
import { BreakPoints } from "./state.model"

export const state = {
  loading: false,
  breakpoints: {
    ...breakpointsSegments,
    lt: { ...breakpointsSegments },
    gt: { ...breakpointsSegments },
  } as BreakPoints,
  mapDimensions: {
    width: 700,
    height: 1000
  },
  selectedMarkerLocation: null as ReverseResult | null,
  drawerActivation: false,
  drawerShowDetails: false,
}
