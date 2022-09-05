import { Tile } from "../Map.model";
import { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: BooleanConstructor;
    tiles: {
        type: PropType<Tile[]>;
        default: () => never[];
    };
    settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
    settingsBoxStyle: ObjectConstructor;
}, {
    instance: import("vue").ComponentInternalInstance | null;
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        modelValue: BooleanConstructor;
        tiles: {
            type: PropType<Tile[]>;
            default: () => never[];
        };
        settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
        settingsBoxStyle: ObjectConstructor;
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>>;
    emit: (event: "update:modelValue", ...args: any[]) => void;
    updateModel: (value: boolean) => void;
    showTiles: import("vue").Ref<boolean>;
    close: () => void;
    store: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: BooleanConstructor;
    tiles: {
        type: PropType<Tile[]>;
        default: () => never[];
    };
    settingsBoxClass: (ObjectConstructor | ArrayConstructor)[];
    settingsBoxStyle: ObjectConstructor;
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    tiles: Tile[];
    modelValue: boolean;
}>;
export default _sfc_main;
