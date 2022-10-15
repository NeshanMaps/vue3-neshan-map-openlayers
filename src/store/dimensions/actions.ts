import { breakpointsSegments, breakpointsSegmentsPixels } from "@/parameters"
import { toRaw } from "vue"
import { BreakPoints, BreakpointsSegments } from "./dimensions.model"
import { Context } from "../store.model"

/**
 * Updates map width & height values on window resize
 */
const updateMapDimensions = (context: Context) => {
  if (!context.state.mapContainer) return
  context.state.mapDimensions = {
    height: context.state.mapContainer.clientHeight + "px",
    width: context.state.mapContainer.clientWidth + "px",
  }
}

/**
 * Updates store breakpoints on windows resize
 */
const updateBreakpoints = (context: Context) => {
  const width = window.innerWidth
  const keys = <(keyof BreakpointsSegments)[]>Object.keys(breakpointsSegments)
  const newBreakpoints: BreakPoints = JSON.parse(
    JSON.stringify(toRaw(context.state.breakpoints))
  )
  keys.forEach((brp, i) => {
    const nextBrp = keys[i + 1]
    if (width >= breakpointsSegmentsPixels[brp]) {
      newBreakpoints.lt[brp] = false
      if (!nextBrp || width < breakpointsSegmentsPixels[nextBrp]) {
        newBreakpoints[brp] = true
        newBreakpoints.gt[brp] = false
      } else {
        newBreakpoints[brp] = false
        newBreakpoints.gt[brp] = true
      }
    } else if (width < breakpointsSegmentsPixels[brp]) {
      newBreakpoints.lt[brp] = true
      newBreakpoints.gt[brp] = false
    }
  })
  context.state.breakpoints = newBreakpoints
}

export const dimensionsActions = {
  updateMapDimensions,
  updateBreakpoints,
}
