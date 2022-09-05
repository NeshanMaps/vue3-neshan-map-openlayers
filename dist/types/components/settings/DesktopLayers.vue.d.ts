import { PropType } from "vue";
import { Tile } from "../Map.model";
declare const _sfc_main: import("vue").DefineComponent<{
    tiles: {
        type: PropType<Tile[]>;
        default: () => never[];
    };
    settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
    settingsBoxStyle: ObjectConstructor;
}, {
    store: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tiles: {
        type: PropType<Tile[]>;
        default: () => never[];
    };
    settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
    settingsBoxStyle: ObjectConstructor;
}>>, {
    tiles: Tile[];
}>;
export default _sfc_main;
