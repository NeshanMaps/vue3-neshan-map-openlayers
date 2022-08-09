import { ReverseResult } from "@/components/Map.model";
import { BreakPoints } from "./state.model";
export declare const mutations: {
    toggleSearchLoading(value: boolean): void;
    toggleReverseLoading(value: boolean): void;
    toggleDrawerActivation(value: boolean): void;
    toggleDrawerShowDetails(value: boolean): void;
    toggleMobileDrawerShowDetails(value: boolean): void;
    setSelectedMarkerLocation(value: ReverseResult): void;
    setMapDimenstions(value: {
        width: number;
        height: number;
    }): void;
    setBreakPoints(value: BreakPoints): void;
};
