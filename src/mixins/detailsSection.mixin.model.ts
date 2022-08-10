import { SelectedMarker } from "@/store/state.model"
import { ExtractPropTypes, PropType, Ref } from "vue"

export interface DetailsSectionMixin {
  props: Readonly<
    ExtractPropTypes<{
      item: PropType<SelectedMarker>
    }>
  >
  containerRef: Ref<HTMLElement | undefined>
}
