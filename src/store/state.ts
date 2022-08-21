import { Api } from "@/components/Map.model"
import { reactive } from "vue"
import { dimenstionsState } from "./dimensions/state"
import { markersState } from "./markers/state"
import { overlayState } from "./overlays/state"
import { drawersState } from "./drawers/state"
import { mapState } from "./map/state"

export const state = reactive({
  ...dimenstionsState,
  ...markersState,
  ...overlayState,
  ...drawersState,
  ...mapState,
  api: null as Api | null,
  searchLoading: false,
  reverseLoading: false,
})
