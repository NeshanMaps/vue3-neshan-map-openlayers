export declare type IconName =
  | "close"
  | "magnet"
  | "neighborhood_landmark"
  | "formal_school"
  | "university"
  | "secondary"
  | "vaccine"
  | "subway_station"
  | "metro_entrance"
  | "footway"
  | "department_store"
  | "internet_cafe"
  | "park"
  | "hotel"
  | "local_government_office"
export declare interface Icon {
  d: string
  color?: string
  size?: number
  scale?: number
}
export declare type InlineSvgs = Record<IconName, Icon>

export declare type CategoryName = "place" | "municipal"
export declare type DefaultIcons = Record<CategoryName, Icon>