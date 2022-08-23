import { DivElementRef } from "../../components/Map.model"
import { breakpointsSegments, breakpointsSegmentsPixels } from "@/parameters"
import { toRaw } from "vue"
import { store } from ".."
import { BreakPoints, BreakpointsSegments } from "./dimensions.model"

/**
 * Updates map width & height values on window resize
 */
const updateMapDimensions = (mapContainer: DivElementRef) => {
  if (!mapContainer.value) return
  store.setMapDimenstions({
    height: mapContainer.value.clientHeight + 'px',
    width: mapContainer.value.clientWidth + 'px',
  })
}

/**
 * Updates store breakpoints on windows resize
 */
const updateBreakpoints = () => {
  const width = window.innerWidth
  const keys = <(keyof BreakpointsSegments)[]>Object.keys(breakpointsSegments)
  const newBreakpoints: BreakPoints = JSON.parse(
    JSON.stringify(toRaw(store.state.breakpoints))
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
  store.setBreakPoints(newBreakpoints)
}

export const dimensionsActions = {
  updateMapDimensions,
  updateBreakpoints,
}
