import { BreakPoints } from "./dimensions.model"
import type { Store } from ".."

export const dimensionsMutations = {
  setBreakPoints(value: BreakPoints) {
    (<Store><unknown>this).state.breakpoints = value
  },
  setMapDimenstions(value: { width: string; height: string }) {
    (<Store><unknown>this).state.mapDimensions = value
  },
}
