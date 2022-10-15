import { Context } from "../store.model"

/**
 * Toggles result view drawers based on screen
 */
const toggleResultDrawers = (
  context: Context,
  value = !context.state.drawerShowDetails
) => {
  if (context.getters.touchPlatform) {
    context.state.mobileDrawerShowDetails = value
  } else {
    context.state.drawerShowDetails = value
    context.state.drawerActivation = value
  }
}

export const drawersActions = {
  toggleResultDrawers,
}
