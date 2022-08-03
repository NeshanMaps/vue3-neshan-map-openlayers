import { onMounted, ref, watch } from "vue"
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
  onMounted(() => {
    const initialWidth = containerRef.value?.clientWidth
    if (initialWidth) width.value = initialWidth
  })
  return {
    width
  }
}
