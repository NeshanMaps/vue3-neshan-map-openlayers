import { ReverseResult } from "@/components/Map.model"
import { reactive } from "vue"
import { state } from "./state"

export const store = reactive({
  state,
  toggleLoading(value: boolean) {
    this.state.loading = value
  },
  toggleDrawerActivation(value: boolean) {
    this.state.drawerActivation = value
  },
  setSelectedMarkerLocation(value: ReverseResult) {
    this.state.selectedMarkerLocation = value
  },
  setMapHeight(value: number) {
    this.state.mapHeight = value
  },
  toggleDrawerShowDetails(value: boolean) {
    this.state.drawerShowDetails = value
  }
})
