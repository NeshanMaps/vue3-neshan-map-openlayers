import { Ref } from "vue";

export declare type NuString = null | string;
export declare type MapType =
  | "neshan"
  | "dreamy"
  | "dreamy-gold"
  | "standard-night"
  | "standard-day"
  | "osm-bright";
export declare type DoubleNums = [number, number];
export declare type QuadrupleNums = [number, number, number, number]

export declare type Extent = QuadrupleNums

export declare interface Tile {
  title: MapType;
  url: string;
}

export declare type IconColor = "red" | "blue";
export declare interface CreateIconProps {
  color?: IconColor;
  iconScale?: number;
  src?: string;
  anchor?: DoubleNums;
}

export declare interface CreateStyleProps {
  image?: any;
  text?: any;
}

export declare interface CreateLayerProps {
  target?: string;
  style?: any;
  source?: any;
}

export declare interface GetTitleFromDataProps {
  place?: NuString;
  route_name?: NuString;
  neighbourhood?: NuString;
}

export declare interface CoordsObj {
  latitude: number;
  longitude: number;
}
export declare type CoordsArr = DoubleNums;

export declare interface SearchItem {
  category: string;
  location: {
    x: number;
    y: number;
  };
  neighbourhood: string;
  region: string;
  title: string;
  type: string;
}
export declare interface SearchResult {
  count: number;
  items: SearchItem[];
}

export declare interface ReverseResult {
  city: NuString;
  district: NuString;
  formatted_address: NuString;
  in_odd_even_zone: boolean;
  in_traffic_zone: boolean;
  municipality_zone: NuString;
  neighbourhood: NuString;
  place: NuString;
  route_name: NuString;
  route_type: NuString;
  state: NuString;
  status: NuString;
  village: NuString;
}

export declare interface SearchProps {
  term?: string;
  coords?: CoordsArr;
}
export declare interface Api {
  REVERSE: (lng: number, lat: number) => Promise<ReverseResult>;
  SEARCH: (term: string, coords: CoordsArr) => Promise<SearchResult>;
}

export declare interface CreateMarkersPropsItem {
  style?: any;
  image?: any;
  color?: IconColor;
  iconScale?: number;
  text?: string;
  coords?: CoordsArr;
}
export declare type CreateMarkersProps = CreateMarkersPropsItem[];

export declare interface ChangeOverlayStatsProps {
  coords: CoordsArr;
  text: string;
}

export declare type ResultHoverCallback = (...[arg]: any[]) => any;
export declare type ResultClickCallback = (...[arg]: any[]) => any;
export declare type MarkersIconCallback = (
  points: CreateMarkersPropsItem
) => CreateIconProps;

export declare interface EventsMixinProps {
  map: Ref<any>;
  mainMarker: Ref<any>;
  mainMarkerCoords: Ref<CoordsArr | null>;
  searchMarkers: Ref<any>;
  api: Ref<Api>;
  emits: (event: "on-zoom" | "on-click", arg: any) => void;
  resultHoverCallback?: ResultHoverCallback;
  resultClickCallback?: ResultClickCallback;
  popupOnMarkerHover: boolean;
  popupOnResultHover: boolean;
  zoomOnMarkerClick: boolean;
  zoomOnResultClick: boolean;
}
export declare interface MarkersMixinProps {
  map: Ref<any>
  markersIconCallback?: MarkersIconCallback
}