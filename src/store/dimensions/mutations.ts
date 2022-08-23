import { state } from "../state"
import { BreakPoints } from "./dimensions.model"

export const dimensionsMutations = {
  setBreakPoints(value: BreakPoints) {
    state.breakpoints = value
  },
  setMapDimenstions(value: { width: string; height: string }) {
    state.mapDimensions = value
  },
}
