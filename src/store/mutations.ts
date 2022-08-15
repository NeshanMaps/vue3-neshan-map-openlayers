import { Api, OlMap } from "@/components/Map.model"
import { dimensionsMutations } from "./dimensions/mutations"
import { markersMutations } from "./markers/mutations"
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
  setMap(value: OlMap) {
    state.map = value
  },
  setApi(value: Api) {
    state.api = value
  },
  ...markersMutations,
  ...dimensionsMutations,
}
