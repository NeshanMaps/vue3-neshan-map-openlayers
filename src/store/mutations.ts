import { ReverseResult } from "@/components/Map.model"
import { state } from "./state"
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
  setSelectedMarkerLocation(value: ReverseResult) {
    state.selectedMarkerLocation = value
  },
  setMapDimenstions(value: { width: number; height: number }) {
    state.mapDimensions = value
  },
}
