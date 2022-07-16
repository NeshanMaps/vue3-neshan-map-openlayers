import { CreateMarkersOptions, CreateMarkersProps, MarkersMixinProps } from '../components/Map.model';
export declare function markersMixin({ map }: MarkersMixinProps): {
    addMarkers: (points: CreateMarkersProps, options?: CreateMarkersOptions | undefined) => {
        layer: any;
        style: any;
    };
    clearMarkerLayer: (layer: any) => void;
};
