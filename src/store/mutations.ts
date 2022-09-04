import { Api } from "../components/Map.model"
import { dimensionsMutations } from "./dimensions/mutations"
import { markersMutations } from "./markers/mutations"
import { drawersMutations } from "./drawers/mutations"
import { mapMutations } from "./map/mutations"
import { overlaysMutations } from "./overlays/mutations"
import type { Store } from "."

export const mutations = {
  toggleSearchLoading(value: boolean) {
    (<Store><unknown>this).state.searchLoading = value
  },
  toggleReverseLoading(value: boolean) {
    (<Store><unknown>this).state.reverseLoading = value
  },
  setApi(value: Api) {
    (<Store><unknown>this).state.api = value
  },
  ...markersMutations,
  ...dimensionsMutations,
  ...drawersMutations,
  ...mapMutations,
  ...overlaysMutations,
}
