import { store } from ".."

/**
 * Opens result view drawers based on screen
 */
const openResultDrawers = () => {
  store.toggleDrawerShowDetails(true)
  if (!store.state.mobileDrawerShowDetails)
    store.toggleMobileDrawerShowDetails(true)
  if (!store.getters.screen.small && !store.state.drawerActivation)
    store.toggleDrawerActivation(true)
}

export const drawersActions = {
  openResultDrawers
}
