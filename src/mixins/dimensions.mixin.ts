import { onUpdated, ref, watch, nextTick } from "vue"
import { DimensionsMixin } from "./dimensions.mixin.model"

export function dimensionsMixin({
  containerRef
}: DimensionsMixin) {

  const width = ref(0)

  watch(
    () => containerRef.value?.clientWidth,
    (nv) => {
      if (nv) width.value = nv
    }
  )

  const updateWidth = () => {
    const initialWidth = containerRef.value?.clientWidth
    if (initialWidth) width.value = initialWidth
  }

  onUpdated(() => {
    nextTick(() => updateWidth())
  })
  return {
    width
  }
}
