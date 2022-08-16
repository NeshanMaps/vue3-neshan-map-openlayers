import { Api, OlMap } from "@/components/Map.model"
import { reactive } from "vue"
import { dimenstionsState } from "./dimensions/state"
import { markersState } from "./markers/state"
import { overlayState } from "./overlays/state"
import { drawersState } from "./drawers/state"
import { zoomConstants } from "@/parameters"

export const state = reactive({
  ...dimenstionsState,
  ...markersState,
  ...overlayState,
  ...drawersState,
  map: null as OlMap | null,
  zoom: zoomConstants.initialZoom,
  api: null as Api | null,
  searchLoading: false,
  reverseLoading: false,
})
