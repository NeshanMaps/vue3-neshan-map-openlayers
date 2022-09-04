import type { Store } from ".."

export const drawersMutations = {
  toggleDrawerActivation(value: boolean) {
    (<Store><unknown>this).state.drawerActivation = value
  },
  toggleDrawerShowDetails(value: boolean) {
    (<Store><unknown>this).state.drawerShowDetails = value
  },
  toggleMobileDrawerShowDetails(value: boolean) {
    (<Store><unknown>this).state.mobileDrawerShowDetails = value
  },
}
