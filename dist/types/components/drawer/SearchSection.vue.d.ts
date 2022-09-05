declare const _sfc_main: import("vue").DefineComponent<{
    searchBoxClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    searchText: {
        type: StringConstructor;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        searchBoxClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        searchBoxStyle: ObjectConstructor;
        typesClass: ArrayConstructor;
        searchText: {
            type: StringConstructor;
        };
    }>> & {
        "onUpdate:search-text"?: ((...args: any[]) => any) | undefined;
        "onUpdate:search-coords"?: ((...args: any[]) => any) | undefined;
        onSubmit?: ((...args: any[]) => any) | undefined;
    }>>;
    width: string;
    emit: (event: "update:search-text" | "update:search-coords" | "submit", ...args: any[]) => void;
    text: import("vue").WritableComputedRef<string | undefined>;
    emitSearch: (term?: string) => void;
    emitTimeout: number;
    runTimeout: (value?: string | undefined, delay?: number) => void;
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
                /**
                 * Emits Search Term to the parent component
                 * @param term search text
                 */
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:search-text" | "update:search-coords" | "submit")[], "update:search-text" | "update:search-coords" | "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    searchBoxClass: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
    searchBoxStyle: ObjectConstructor;
    typesClass: ArrayConstructor;
    searchText: {
        type: StringConstructor;
    };
}>> & {
    "onUpdate:search-text"?: ((...args: any[]) => any) | undefined;
    "onUpdate:search-coords"?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
