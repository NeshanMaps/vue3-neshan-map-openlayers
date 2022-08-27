import { store } from ".."

/**
 * Toggles result view drawers based on screen
 */
const toggleResultDrawers: (value?: boolean) => void = (
  value = !store.state.drawerShowDetails
) => {
  if (store.getters.touchPlatform) {
    store.toggleMobileDrawerShowDetails(value)
  } else {
    store.toggleDrawerShowDetails(value)
    store.toggleDrawerActivation(value)
  }
}

export const drawersActions = {
  toggleResultDrawers,
}
