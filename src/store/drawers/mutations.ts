import { state } from "../state"

export const drawersMutations = {
  toggleDrawerActivation(value: boolean) {
    state.drawerActivation = value
  },
  toggleDrawerShowDetails(value: boolean) {
    state.drawerShowDetails = value
  },
  toggleMobileDrawerShowDetails(value: boolean) {
    state.mobileDrawerShowDetails = value
  },
}
