import { DetailsSectionMixin } from "./detailsSection.mixin.model";
export declare function detailsSectionMixin({ props, containerRef, }: DetailsSectionMixin): {
    iconName: import("vue").ComputedRef<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
    width: import("vue").Ref<number>;
    formattedItem: import("vue").ComputedRef<{
        place: string;
        address: string;
        region: string;
        neighbourhood: string;
        in_odd_even_zone: boolean;
        in_traffic_zone: boolean;
    }>;
};
