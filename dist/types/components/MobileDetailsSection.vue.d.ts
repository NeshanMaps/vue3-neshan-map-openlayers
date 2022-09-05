declare const _sfc_main: import("vue").DefineComponent<{}, {
    mobileDetailsSectionContainer: import("vue").Ref<HTMLDivElement | undefined>;
    detailsContainer: import("vue").Ref<HTMLDivElement | undefined>;
    fullScreen: import("vue").Ref<boolean>;
    detailsContainerMaxHeight: import("vue").Ref<string>;
    detailsContainerBorderRadius: import("vue").Ref<string>;
    detailsContainerTransition: import("vue").Ref<string>;
    handleTouchMove: (evt: TouchEvent) => void;
    handleTouchEnd: () => void;
    closeScreen: () => void;
    timeout: number;
    addTemporaryTransition: (transitionTime?: number) => void;
    hideModal: () => void;
    collapseSheet: () => void;
    openSheet: () => void;
    store: any;
    Icon: import("vue").DefineComponent<{
        name: {
            type: import("vue").PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
            default: string;
        };
        size: {
            type: NumberConstructor;
            default: number;
        };
        color: StringConstructor;
    }, {
        inlineSvgs: {
            close: {
                d: string;
            };
            magnet: {
                d: string;
            };
            neighborhood_landmark: {
                d: string;
            };
            formal_school: {
                d: string;
            };
            university: {
                d: string;
            };
            primary: {
                d: string;
            };
            secondary: {
                d: string;
                scale: number;
            };
            tertiary: {
                d: string;
                scale: number;
            };
            vaccine: {
                d: string;
            };
            subway_station: {
                d: string;
            };
            metro_entrance: {
                d: string;
                scale: number;
            };
            footway: {
                d: string;
            };
            department_store: {
                d: string;
            };
            internet_cafe: {
                d: string;
            };
            park: {
                d: string;
            };
            hotel: {
                d: string;
            };
            local_government_office: {
                d: string;
            };
            marker: {
                d: string;
            };
            city: {
                d: string;
            };
            residential: {
                d: string;
            };
            back: {
                d: string;
            };
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: import("vue").PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
            default: string;
        };
        size: {
            type: NumberConstructor;
            default: number;
        };
        color: StringConstructor;
    }>>, {
        name: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back";
        size: number;
    }>;
    PointDetails: import("vue").DefineComponent<{
        item: import("vue").PropType<import("../store/markers/markers.model").SelectedMarker>;
        collapse: BooleanConstructor;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            item: import("vue").PropType<import("../store/markers/markers.model").SelectedMarker>;
            collapse: BooleanConstructor;
        }>> & {}>>;
        pointDetailsContainer: import("vue").Ref<HTMLDivElement | undefined>;
        iconName: import("vue").ComputedRef<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back" | undefined>;
        width: import("vue").Ref<number>;
        formattedItem: import("vue").ComputedRef<{
            place: import("./Map.model").NuString;
            address: import("./Map.model").NuString;
            region: import("./Map.model").NuString;
            neighbourhood: string;
            in_odd_even_zone: boolean | null;
            in_traffic_zone: boolean | null;
        } | undefined>;
        Icon: import("vue").DefineComponent<{
            name: {
                type: import("vue").PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                default: string;
            };
            size: {
                type: NumberConstructor;
                default: number;
            };
            color: StringConstructor;
        }, {
            inlineSvgs: {
                close: {
                    d: string;
                };
                magnet: {
                    d: string;
                };
                neighborhood_landmark: {
                    d: string;
                };
                formal_school: {
                    d: string;
                };
                university: {
                    d: string;
                };
                primary: {
                    d: string;
                };
                secondary: {
                    d: string;
                    scale: number;
                };
                tertiary: {
                    d: string;
                    scale: number;
                };
                vaccine: {
                    d: string;
                };
                subway_station: {
                    d: string;
                };
                metro_entrance: {
                    d: string;
                    scale: number;
                };
                footway: {
                    d: string;
                };
                department_store: {
                    d: string;
                };
                internet_cafe: {
                    d: string;
                };
                park: {
                    d: string;
                };
                hotel: {
                    d: string;
                };
                local_government_office: {
                    d: string;
                };
                marker: {
                    d: string;
                };
                city: {
                    d: string;
                };
                residential: {
                    d: string;
                };
                back: {
                    d: string;
                };
            };
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            name: {
                type: import("vue").PropType<"close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back">;
                default: string;
            };
            size: {
                type: NumberConstructor;
                default: number;
            };
            color: StringConstructor;
        }>>, {
            name: "close" | "magnet" | "neighborhood_landmark" | "formal_school" | "university" | "primary" | "secondary" | "tertiary" | "vaccine" | "subway_station" | "metro_entrance" | "footway" | "department_store" | "internet_cafe" | "park" | "hotel" | "local_government_office" | "marker" | "city" | "residential" | "back";
            size: number;
        }>;
        markerUrls: {
            main: string;
            search: string;
            colorSvg: string;
            greySvg: string;
            preview256: string;
            searchPrev: string;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        item: import("vue").PropType<import("../store/markers/markers.model").SelectedMarker>;
        collapse: BooleanConstructor;
    }>>, {
        collapse: boolean;
    }>;
    Loading: import("vue").DefineComponent<{
        color: {
            type: StringConstructor;
            default: string;
        };
        dense: BooleanConstructor;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        color: {
            type: StringConstructor;
            default: string;
        };
        dense: BooleanConstructor;
    }>>, {
        color: string;
        dense: boolean;
    }>;
    drawerConstants: {
        width: string;
        bottomSheetNormalHeight: string;
        bottomSheetloadingHeight: string;
        bottomSheetBorderRadius: string;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
