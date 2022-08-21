import { Api } from "../components/Map.model"
import { dimensionsMutations } from "./dimensions/mutations"
import { markersMutations } from "./markers/mutations"
import { drawersMutations } from "./drawers/mutations"
import { state } from "./state"
import { mapMutations } from "./map/mutations"

export const mutations = {
  toggleSearchLoading(value: boolean) {
    state.searchLoading = value
  },
  toggleReverseLoading(value: boolean) {
    state.reverseLoading = value
  },
  setApi(value: Api) {
    state.api = value
  },
  ...markersMutations,
  ...dimensionsMutations,
  ...drawersMutations,
  ...mapMutations
}
