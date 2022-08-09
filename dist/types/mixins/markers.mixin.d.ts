import { Feature } from "openlayers";
import { CreateMarkers, MarkersMixinProps, VectorLayerRef } from "../components/Map.model";
export declare function markersMixin({ map, searchMarkers }: MarkersMixinProps): {
    addMarkers: CreateMarkers;
    clearMarkerLayer: (layer: VectorLayerRef) => void;
    toggleClusterSource: (layer: VectorLayerRef, deactivate: boolean) => void;
    findClusterByTitle: (title: string) => {
        feature: Feature | undefined;
        cluster: Feature | undefined;
    };
    findMarkerByTitle: (title: string) => Feature | undefined;
    getMarkerInClusterByTitle: (cluster: Feature, title: string) => Feature | undefined;
};
