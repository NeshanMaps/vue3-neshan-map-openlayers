import { Api } from "@/components/Map.model"
import { reactive } from "vue"
import { dimenstionsState } from "./dimensions/state"
import { markersState } from "./markers/state"
import { overlayState } from "./overlays/state"
import { drawersState } from "./drawers/state"
import { mapState } from "./map/state"
import { State } from "./store.model"

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

export const reactiveState = reactive(state)

export const stateGenerator = () => {
  return reactive(<State>JSON.parse(JSON.stringify(state)))
}
