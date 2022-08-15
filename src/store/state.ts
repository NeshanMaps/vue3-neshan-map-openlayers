import { Api, OlMap } from "@/components/Map.model"
import { reactive } from "vue"
import { dimenstionsState } from "./dimensions/state"
import { markersState } from "./markers/state"
import { overlayState } from "./overlays/state"

export const state = reactive({
  ...dimenstionsState,
  ...markersState,
  ...overlayState,
  map: null as OlMap | null,
  api: null as Api | null,
  searchLoading: false,
  reverseLoading: false,
  drawerActivation: false,
  drawerShowDetails: false,
  mobileDrawerShowDetails: false,
})
