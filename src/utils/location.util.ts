declare const ol: any; // eslint-disable-line
import { GetTitleFromDataProps, CoordsObj, CoordsArr } from "@/components/Map.model";
/**
 * Creates the sufficent title based on result data.
 * @param data - result of neshan web search
 * @returns title
 */
export const getTitleFromData = (data: GetTitleFromDataProps) => {
    const mainTitle = data.place
        ? data.place
        : data.route_name
            ? data.route_name
            : "معبر بدون نام";
    const fullTitle = data.neighbourhood
        ? mainTitle + `، ${data.neighbourhood}`
        : mainTitle;
    return fullTitle;
};
export const sanitizeLocation = (loc?: CoordsObj) => {
    return loc ? loc instanceof Object ? [loc.longitude, loc.latitude] as CoordsArr : loc : null;
};

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
                resolve(pos);
            });
        }
    );
    const position = await positionPromise;
    return (position && sanitizeLocation(position.coords)) || Object.values(createCoordsObject()) as CoordsArr;
};

/**
 * Create an object for a quick lat lng access
 */
export const createCoordsObject = () => {
    return {
        longitude: 59.5870851,
        latitude: 36.311559
    }
}