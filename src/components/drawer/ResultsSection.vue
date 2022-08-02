<template>
  <div
    :style="resultBoxStyle"
    :class="resultBoxClass"
    class="map-result-box mx-auto"
    ref="resultSection"
  >
    <Loading v-if="store.state.loading" dense color="blue" />
    <template
      v-if="store.state.drawerShowDetails && store.state.selectedMarkerLocation"
    >
      <ResultView :item="store.state.selectedMarkerLocation" />
    </template>
    <template v-else>
      <ResultItem
        v-for="item in results"
        :key="'' + item.location.x + item.location.y"
        :item="item"
        @mouseenter="emitHover(item)"
        @click="emitClick(item)"
      />
    </template>
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType, defineEmits, watch, ref } from "vue"
import { SearchItem } from "../Map.model"
import ResultItem from "./ResultItem.vue"
import Loading from "../Loading.vue"
import ResultView from "./ResultView.vue"
import { store } from "@/store"
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
    const style = store.getters.screen.small
      ? `height: ${store.state.mapDimensions.height}px; width: ${store.getters.drawerWidth}px; ${props.resultBoxStyle}`
      : `height: ${store.state.mapDimensions.height}px; width: ${store.getters.drawerWidth}px; ${props.resultBoxStyle}`
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
