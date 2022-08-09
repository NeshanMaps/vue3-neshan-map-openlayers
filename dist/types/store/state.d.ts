export declare const state: {
    searchLoading: boolean;
    reverseLoading: boolean;
    breakpoints: {
        lt: {
            xs: boolean;
            sm: boolean;
            md: boolean;
            lg: boolean;
            xl: boolean;
        };
        gt: {
            xs: boolean;
            sm: boolean;
            md: boolean;
            lg: boolean;
            xl: boolean;
        };
        xs: boolean;
        sm: boolean;
        md: boolean;
        lg: boolean;
        xl: boolean;
    };
    mapDimensions: {
        width: number;
        height: number;
    };
    selectedMarkerLocation: {
        city: import("@/components/Map.model").NuString;
        district: import("@/components/Map.model").NuString;
        formatted_address: import("@/components/Map.model").NuString;
        in_odd_even_zone: boolean;
        in_traffic_zone: boolean;
        municipality_zone: import("@/components/Map.model").NuString;
        neighbourhood: import("@/components/Map.model").NuString;
        place: import("@/components/Map.model").NuString;
        route_name: import("@/components/Map.model").NuString;
        route_type: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | null;
        state: import("@/components/Map.model").NuString;
        status: import("@/components/Map.model").NuString;
        village: import("@/components/Map.model").NuString;
    } | null;
    drawerActivation: boolean;
    drawerShowDetails: boolean;
    mobileDrawerShowDetails: boolean;
};
