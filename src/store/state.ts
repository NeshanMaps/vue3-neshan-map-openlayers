import { breakpointsSegments } from "@/parameters"
import { reactive } from "vue"
import { BreakPoints, SelectedMarker } from "./state.model"

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
  selectedMarker: null as SelectedMarker,
  drawerActivation: false,
  drawerShowDetails: false,
  mobileDrawerShowDetails: false,
})
