import { ReverseResult } from "@/components/Map.model"
import { reactive } from "vue"
import { state } from "./state"
import { getters } from "./getters"

export const store = reactive({
  state,
  getters,
  toggleLoading(value: boolean) {
    this.state.loading = value
  },
  toggleDrawerActivation(value: boolean) {
    this.state.drawerActivation = value
  },
  setSelectedMarkerLocation(value: ReverseResult) {
    this.state.selectedMarkerLocation = value
  },
  setMapDimenstions(value: { width: number, height: number}) {
    this.state.mapDimensions = value
  },
  toggleDrawerShowDetails(value: boolean) {
    this.state.drawerShowDetails = value
  }
})
