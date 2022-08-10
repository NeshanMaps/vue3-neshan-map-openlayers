import { inlineSvgs } from "@/static"
import { computed } from "vue"
import { DetailsSectionMixin } from "./detailsSection.mixin.model"
import { dimensionsMixin } from "."

export function detailsSectionMixin({
  props,
  containerRef,
}: DetailsSectionMixin) {
  const iconName = computed(() => {
    if (!props.item) return
    const isReverse = "route_type" in props.item
    const name = isReverse
      ? props.item.route_type &&
        Object.keys(inlineSvgs).includes(props.item.route_type)
        ? props.item.route_type
        : props.item.place
        ? "local_government_office"
        : "primary"
      : props.item.type && Object.keys(inlineSvgs).includes(props.item.type)
      ? props.item.type
      : props.item.category === "place"
      ? "local_government_office"
      : "primary"
    return name
  })

  const formattedItem = computed(() => {
    if (!props.item) return
    const isReverse = "route_type" in props.item
    const region = isReverse
      ? props.item.city || props.item.village
        ? props.item.state
          ? (props.item.city || props.item.village) + ", " + props.item.state
          : props.item.city || props.item.village
        : props.item.state
      : props.item.region
    const item = {
      place: isReverse ? props.item.place : props.item.title,
      address: isReverse ? props.item.formatted_address : props.item.address,
      region,
      neighbourhood: isReverse ? 'محله ' + props.item.neighbourhood : props.item.neighbourhood,
      in_odd_even_zone: isReverse ? props.item.in_odd_even_zone : null,
      in_traffic_zone: isReverse ? props.item.in_traffic_zone : null,
    }
    return item
  })
  const { width } = dimensionsMixin({ containerRef })

  return {
    iconName,
    width,
    formattedItem,
  }
}
