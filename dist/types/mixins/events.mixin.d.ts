import { EventsMixinProps } from "../components/Map.model";
import { SearchItem } from "../store/markers/markers.model";
import { Feature, MapBrowserEvent } from "openlayers";
export declare function eventsMixin({ emits, resultHoverCallback, resultClickCallback, markerHoverCallback, zoomOnMarkerClick, zoomOnResultClick, popupOnMarkerHover, popupOnResultHover, reverseOnClick, }: EventsMixinProps): {
    setupMapEvents: () => void;
    setupClickEvent: () => void;
    setupZoomEvent: () => void;
    setupMarkerHoverEvent: () => void;
    handleClickEvent: (event: MapBrowserEvent) => Promise<void>;
    handleResultHover: (item: SearchItem) => void;
    handleResultClick: (item: SearchItem) => void;
    getClusterExtent: (cluster: Feature) => import("openlayers").Extent;
};
