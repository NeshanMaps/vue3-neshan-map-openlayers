<template>
  <div
    :style="resultBoxStyle"
    :class="resultBoxClass"
    class="map-result-box mx-auto"
    ref="resultSection"
  >
    <Loading
      v-if="
        store.getters.touchPlatform
          ? store.state.searchLoading
          : store.getters.loading
      "
    />
    <template
      v-if="
        !store.getters.touchPlatform &&
        store.state.drawerShowDetails &&
        store.state.selectedMarker
      "
    >
      <PointDetails :item="store.state.selectedMarker" />
    </template>
    <template v-else>
      <ResultItem
        v-for="item in results"
        :key="'' + item.location.x + item.location.y"
        :item="item"
        @mouseenter="handleHoverEmit(item)"
        @click="emitClick(item)"
      />
    </template>
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType, defineEmits, watch, ref } from "vue"
import { store } from "@/store"

import ResultItem from "./ResultItem.vue"
import Loading from "@/components/LoadingComp.vue"
import PointDetails from "./PointDetails.vue"
import { SearchItem } from "../../../store/markers/markers.model"
const props = defineProps({
  resultBoxClass: Array,
  resultBoxStyle: Object,
  results: {
    type: Array as PropType<SearchItem[]>,
    default: () => [],
  },
})

const resultSection = ref<HTMLDivElement>()

const emits = defineEmits(["result-hover", "result-click"])
const handleHoverEmit = (item: SearchItem) => {
  if (!store.getters.touchPlatform) {
    emitHover(item)
  }
}
const emitHover = (item: SearchItem) => {
  emits("result-hover", item)
}
const emitClick = (item: SearchItem) => {
  emits("result-click", item)
}

watch(
  () => store.state.drawerActivation,
  (nv) => {
    if (!nv) return
    const style = store.getters.touchPlatform
      ? `height: ${store.state.mapDimensions.height}; width: ${store.getters.drawerWidth}; ${props.resultBoxStyle}`
      : `height: ${store.state.mapDimensions.height}; width: ${store.getters.drawerWidth}; ${props.resultBoxStyle}`
    resultSection.value?.setAttribute("style", style)
  }
)
</script>

<style lang="scss" scoped>
.map-result-box {
  overflow: auto;
  background: none;
  transition: inherit;
}

/* width */
::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
