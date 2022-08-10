import { SearchItem } from "@/components/Map.model"
import { Feature } from "openlayers"

export declare type GetSearchResultByFeature = (
  feature: Feature
) => SearchItem | undefined
export declare type GetMarkerByTitle = (title: string) => Feature | undefined
export declare type GetClusterByTitle = (title: string) => {
  feature: Feature | undefined
  cluster: Feature | undefined
}
