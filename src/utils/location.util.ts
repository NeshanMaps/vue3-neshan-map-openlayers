declare const ol: any // eslint-disable-line
import {
  ReverseResult,
  CoordsObj,
  CoordsArr,
} from '../components/Map.model'
/**
 * Creates the sufficent title based on result data.
 * @param data - result of neshan web search
 * @returns title
 */
export const getTitleFromData = (data: ReverseResult) => {
  const mainTitle = data.place
    ? data.place
    : data.route_name
    ? data.route_name
    : 'معبر بدون نام'
  const fullTitle = data.neighbourhood
    ? mainTitle + `، ${data.neighbourhood}`
    : mainTitle
  return fullTitle
}

/**
 * Get the object of location and turns it into array
 * @param loc - location object
 * @returns
 */
export const sanitizeLocation = (loc?: CoordsObj) => {
  return loc
    ? loc instanceof Object
      ? ([loc.longitude, loc.latitude] as CoordsArr)
      : loc
    : undefined
}

/**
 * Gets the device location
 * if it was succesfull, formats it and returns
 * otherwise, sends Neshan locaton
 * @returns location array
 */
export const getLocation = async () => {
  const positionPromise: Promise<GeolocationPosition> = new Promise(
    (resolve) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        resolve(pos)
      })
    }
  )
  const position = await positionPromise
  return (
    (position && sanitizeLocation(position.coords)) ||
    (Object.values(createCoordsObject()) as CoordsArr)
  )
}

/**
 * Create an object for a quick lat lng access
 */
export const createCoordsObject = () => {
  return {
    longitude: 59.5870851,
    latitude: 36.311559,
  }
}

/**
 * Transforms common latlng to open layers-friendly latlng
 * @param point
 * @param from
 * @param to
 * @returns points
 */
export const transformCoords = (
  point: CoordsArr,
  from = 'EPSG:3857',
  to = 'EPSG:4326'
): CoordsArr => {
  return ol.proj.transform(point, from, to)
}
