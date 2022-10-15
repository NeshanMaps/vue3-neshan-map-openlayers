import { reactive } from "vue"
import { dimenstionsState } from "./dimensions/state"
import { markersState } from "./markers/state"
import { overlayState } from "./overlays/state"
import { drawersState } from "./drawers/state"
import { mapState } from "./map/state"
import { State } from "./store.model"
import { Api } from "@/apis/apis.model"

export const state = {
  ...dimenstionsState,
  ...markersState,
  ...overlayState,
  ...drawersState,
  ...mapState,
  api: null as Api | null,
  searchLoading: false,
  reverseLoading: false,
}

export const stateGenerator = () => {
  return reactive(<State>JSON.parse(JSON.stringify(state)))
}
