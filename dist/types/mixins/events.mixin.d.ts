import { EventsMixinProps, SearchItem, ZoomToExtentOptions } from "@/components/Map.model";
export declare function eventsMixin({ map, mainMarker, mainMarkerCoords, searchMarkers, api, emits, resultHoverCallback, resultClickCallback, zoomOnMarkerClick, zoomOnResultClick, popupOnMarkerHover, popupOnResultHover, setupOverlay, overlay, changeOverlayStats, addMarkers }: EventsMixinProps): {
    setupMapEvents: () => void;
    setupClickEvent: () => void;
    setupZoomEvent: () => void;
    setupMarkerHoverEvent: () => void;
    handleClickEvent: (event: any) => void;
    handleResultHover: (item: SearchItem) => void;
    handleResultClick: (item: SearchItem) => void;
    zoomToExtent: (extent: import("@/components/Map.model").QuadrupleNums, options?: ZoomToExtentOptions | undefined) => void;
    getClusterExtent: (cluster: any) => import("@/components/Map.model").QuadrupleNums;
};
