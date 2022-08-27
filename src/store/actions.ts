import { markersActions } from "./markers/actions"
import { dimensionsActions } from "./dimensions/actions"
import { overlaysActions } from "./overlays/actions"
import { drawersActions } from "./drawers/actions"
import { mapActions } from "./map/actions"

export const actions = {
  markers: markersActions,
  dimensions: dimensionsActions,
  overlays: overlaysActions,
  drawers: drawersActions,
  map: mapActions
}
