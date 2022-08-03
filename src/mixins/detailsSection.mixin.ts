import { inlineSvgs } from "@/static"
import { computed } from "vue"
import { DetailsSectionMixin } from "./detailsSection.mixin.model"
import { dimensionsMixin } from "."

export function detailsSectionMixin({
  props,
  containerRef,
}: DetailsSectionMixin) {
  const iconName = computed(() => {
    const name =
      props.item?.route_type &&
      Object.keys(inlineSvgs).includes(props.item?.route_type)
        ? props.item.route_type
        : props.item?.place
        ? "local_government_office"
        : "primary"
    return name
  })
  const { width } = dimensionsMixin({ containerRef })

  return {
    iconName,
    width,
  }
}
