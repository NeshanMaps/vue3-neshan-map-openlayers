import { EventsMixinProps, Ol, SearchItem, VectorLayer, ZoomToExtentOptions } from "@/components/Map.model";
import { Feature, MapBrowserEvent } from "openlayers";
export declare function eventsMixin({ map, mainMarker, mainMarkerCoords, api, emits, resultHoverCallback, resultClickCallback, markerHoverCallback, zoomOnMarkerClick, zoomOnResultClick, popupOnMarkerHover, popupOnResultHover, setupOverlays, changeOverlayStats, addMarkers, mapContainer, findMarkerByTitle, findClusterByTitle, }: EventsMixinProps): {
    setupMapEvents: () => void;
    setupClickEvent: () => void;
    setupZoomEvent: () => void;
    setupMarkerHoverEvent: () => void;
    handleClickEvent: (event: Ol.MapBrowserEvent) => Promise<void>;
    handleResultHover: (item: SearchItem) => void;
    handleResultClick: (item: SearchItem) => void;
    getClusterExtent: (cluster: Ol.Feature) => Ol.Extent;
    zoomToExtent: (extent: Ol.Extent, options?: ZoomToExtentOptions | undefined) => void;
    zoomToCluster: (cluster: Feature, options?: ZoomToExtentOptions | undefined) => void;
    zoomToLayer: (layer: VectorLayer, options?: ZoomToExtentOptions | undefined) => void;
    updateMapDimensions: () => void;
    zoom: import("vue").Ref<number>;
    updateBreakpoints: () => void;
};
