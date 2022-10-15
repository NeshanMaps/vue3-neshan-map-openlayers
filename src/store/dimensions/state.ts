import { breakpointsSegments, unsetMapDimnensions } from "@/parameters"

const stateGen = () => {
  return {
    breakpoints: {
      ...breakpointsSegments,
      lt: { ...breakpointsSegments },
      gt: { ...breakpointsSegments },
    },
    mapDimensions: unsetMapDimnensions,
  }
}

export const dimenstionsState = stateGen()
