import { state } from "./state"
import { computed, reactive } from "vue"
import { drawerConstants } from "@/parameters"
import { isTouchPlatform } from "@/utils"
export const getters = reactive({
  drawerWidth: computed(() => {
    const width = isTouchPlatform()
      ? state.mapDimensions.width
      : drawerConstants.width
    return width
  }),
  loading: computed(() => {
    return state.searchLoading || state.reverseLoading
  }),
  touchPlatform: computed(() => {
    return isTouchPlatform()
  }),
})
