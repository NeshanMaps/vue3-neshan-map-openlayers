import { Api, OlMap } from "../components/Map.model"
import { dimensionsMutations } from "./dimensions/mutations"
import { markersMutations } from "./markers/mutations"
import { drawersMutations } from "./drawers/mutations"
import { state } from "./state"

export const mutations = {
  toggleSearchLoading(value: boolean) {
    state.searchLoading = value
  },
  toggleReverseLoading(value: boolean) {
    state.reverseLoading = value
  },
  setMap(value: OlMap) {
    state.map = value
  },
  setZoom(value: number) {
    state.zoom = value
  },
  setApi(value: Api) {
    state.api = value
  },
  ...markersMutations,
  ...dimensionsMutations,
  ...drawersMutations,
}
