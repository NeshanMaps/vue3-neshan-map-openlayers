import { SelectedMarker } from "@/store/state.model"
import { state } from "./state"
import { BreakPoints } from "./state.model"
export const mutations = {
  toggleSearchLoading(value: boolean) {
    state.searchLoading = value
  },
  toggleReverseLoading(value: boolean) {
    state.reverseLoading = value
  },
  toggleDrawerActivation(value: boolean) {
    state.drawerActivation = value
  },
  toggleDrawerShowDetails(value: boolean) {
    state.drawerShowDetails = value
  },
  toggleMobileDrawerShowDetails(value: boolean) {
    state.mobileDrawerShowDetails = value
  },
  setSelectedMarker(value: SelectedMarker) {
    state.selectedMarker = value
  },
  setMapDimenstions(value: { width: number; height: number }) {
    state.mapDimensions = value
  },
  setBreakPoints(value: BreakPoints) {
    state.breakpoints = value
  },
}