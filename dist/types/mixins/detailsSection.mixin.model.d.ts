import { ReverseResult } from "@/components/Map.model";
import { ExtractPropTypes, PropType, Ref } from "vue";
export interface DetailsSectionMixin {
    props: Readonly<ExtractPropTypes<{
        item: PropType<ReverseResult | null>;
    }>>;
    containerRef: Ref<HTMLElement | undefined>;
}
