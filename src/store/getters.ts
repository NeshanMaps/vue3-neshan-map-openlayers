import { state } from "./state"
import { computed } from "vue"
import { drawerConstants } from "@/parameters"
export const getters = {
  screen: computed(() => {
    return {
      small: state.breakpoints.lt.md,
    }
  }),
  drawerWidth: computed(() => {
    const width = state.breakpoints.lt.md ? state.mapDimensions.width : drawerConstants.width
    return width
  })
}
