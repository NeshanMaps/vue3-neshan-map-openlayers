import { GetTitleFromDataProps, CoordsObj, CoordsArr } from "../components/Map.model";
/**
 * Creates the sufficent title based on result data.
 * @param data - result of neshan web search
 * @returns title
 */
export declare const getTitleFromData: (data: GetTitleFromDataProps) => string;
export declare const sanitizeLocation: (loc?: CoordsObj | undefined) => CoordsArr | null;
/**
 * Gets the device location
 * if it was succesfull, formats it and returns
 * otherwise, sends Neshan locaton
 * @returns location array
 */
export declare const getLocation: () => Promise<CoordsArr>;
/**
 * Create an object for a quick lat lng access
 */
export declare const createCoordsObject: () => {
    longitude: number;
    latitude: number;
};
