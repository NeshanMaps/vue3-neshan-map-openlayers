declare const ol: any;
import {
    CreateIconProps,
    CreateStyleProps,
    CreateLayerProps,
    GetTitleFromDataProps,
    CoordsObj,
    Api,
    CoordsArr,
    Tile,
} from "./Map.model";

export const tiles: Tile[] = [
    {
        title: "osm-bright",
        url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-bright.png",
    },
    {
        title: "standard-night",
        url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-standard-night.png",
    },
    {
        title: "standard-day",
        url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-standard-day.png",
    },
    {
        title: "neshan",
        url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-neshan.png",
    },
    {
        title: "dreamy-gold",
        url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-dreamy-gold.png",
    },
    {
        title: "dreamy",
        url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-dreamy.png",
    },
];
export const createHeaders = (token: string) => {
    return {
        "Api-Key": token,
    };
};
export const urls = {
    reverse: "https://api.neshan.org/v4/reverse",
    search: "https://api.neshan.org/v1/search",
    map: "https://static.neshan.org/sdk/openlayers/5.3.0/ol.js",
};
export const createApi = (token: string): Api => {
    return {
        REVERSE: async (lng, lat) => {
            const params = `?lat=${lat}&lng=${lng}`;
            const res = await fetch(urls.reverse + params, {
                headers: createHeaders(token),
            });
            return await res.json();
        },
        SEARCH: async (term, [lng, lat]) => {
            const params = `?term=${term}&lat=${lat}&lng=${lng}`;
            const res = await fetch(urls.search + params, {
                headers: createHeaders(token),
            });
            return await res.json();
        },
    };
};
export const markerUrls = {
    red: "https://img.icons8.com/color/344/marker--v1.png",
    blue: "https://img.icons8.com/ultraviolet/344/marker.png",
};

export const createText = (): any => {
    return new ol.style.Text({
        overflow: true,
        scale: 1.6,
        offsetY: -43,
        // backgroundFill: new ol.style.Fill({
        //   color: "#ffffff",
        // }),
        fill: new ol.style.Fill({
            color: "#fff",
        }),
        stroke: new ol.style.Stroke({
            color: "0",
            width: 2,
        }),
        // backgroundStroke: new ol.style.Stroke({
        //   color: "0",
        //   width: 1,
        // }),
        // padding: [2, 4, 2, 4],
    });
};
export const createIcon = ({
    color = "red",
    iconScale = 0.1,
}: CreateIconProps = {}): any => {
    return new ol.style.Icon({
        src: markerUrls[color],
        scale: iconScale,
        anchor: [0.5, 1],
    });
};
export const createStyle = ({ image, text }: CreateStyleProps): any => {
    return new ol.style.Style({
        image: image,
        text: text,
    });
};
/**
 * Creates ol source from given features
 * @param features  
 * @returns ol source
 */
export const createSource = (features: any): any => {
    return new ol.source.Vector({
        features,
    });
};
/**
 * Creates ol layer
 * @returns ol layer
 */
export const createLayer = ({
    target = "points",
    style,
    source,
}: CreateLayerProps) => {
    return new ol.layer.Vector({
        target,
        source,
        style,
    });
};
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