import { state } from "./state"
import { computed, reactive } from "vue"
import { drawerConstants } from "@/parameters"
export const getters = reactive({
  screen: computed(() => {
    return {
      small: state.breakpoints.lt.md,
    }
  }),
  drawerWidth: computed(() => {
    const width = state.breakpoints.lt.md
      ? state.mapDimensions.width
      : drawerConstants.width
    return width
  }),
  loading: computed(() => {
    return state.searchLoading || state.reverseLoading
  }),
})
