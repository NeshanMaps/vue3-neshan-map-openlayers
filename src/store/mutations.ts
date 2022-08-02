import { ReverseResult } from "@/components/Map.model"
import { state } from "./state"
export const mutations = {
  toggleLoading(value: boolean) {
    state.loading = value
  },
  toggleDrawerActivation(value: boolean) {
    state.drawerActivation = value
  },
  setSelectedMarkerLocation(value: ReverseResult) {
    state.selectedMarkerLocation = value
  },
  setMapDimenstions(value: { width: number; height: number }) {
    state.mapDimensions = value
  },
  toggleDrawerShowDetails(value: boolean) {
    state.drawerShowDetails = value
  },
  toggleMobileDrawerShowDetails(value: boolean) {
    state.mobileDrawerShowDetails = value
  },
}
