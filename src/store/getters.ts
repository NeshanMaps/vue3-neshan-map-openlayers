import { computed, reactive } from "vue"
import { drawerConstants } from "@/parameters"
import { isTouchPlatform } from "@/utils"
import { State } from "./store.model"
export const getters = (state: State) =>
  reactive({
    drawerWidth: computed(() => {
      const isMobile = state.viewType ? state.viewType === 'mobile' : isTouchPlatform()
      const width = isMobile
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
