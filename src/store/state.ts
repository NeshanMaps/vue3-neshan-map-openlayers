import { ReverseResult } from "@/components/Map.model"
import { breakpointsSegments } from "@/parameters"
import { reactive } from "vue"
import { BreakPoints } from "./state.model"

export const state = reactive({
  searchLoading: false,
  reverseLoading: false,
  breakpoints: {
    ...breakpointsSegments,
    lt: { ...breakpointsSegments },
    gt: { ...breakpointsSegments },
  } as BreakPoints,
  mapDimensions: {
    width: 700,
    height: 1000,
  },
  selectedMarkerLocation: null as ReverseResult | null,
  drawerActivation: false,
  drawerShowDetails: false,
  mobileDrawerShowDetails: false,
})
