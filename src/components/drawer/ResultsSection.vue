<template>
  <div
    :style="resultBoxStyle"
    :class="resultBoxClass"
    class="map-result-box"
    ref="resultSection"
  >
    <Loading v-if="store.state.loading" dense color="blue" />
    <ResultItem
      v-for="item in results"
      :key="'' + item.location.x + item.location.y"
      :item="item"
      @mouseenter="emitHover(item)"
      @click="emitClick(item)"
    />
  </div>
</template>
<script lang="ts">
import { defineProps, PropType, defineEmits, watch, ref } from "vue"
import { SearchItem } from "../Map.model"
export default {
  name: "ResultBox",
}
</script>
<script setup lang="ts">
import ResultItem from "./ResultItem.vue"
import Loading from "../Loading.vue"
import { store } from "@/store"
const props = defineProps({
  resultBoxClass: Array,
  resultBoxStyle: Object,
  results: {
    type: Array as PropType<SearchItem[]>,
    default: () => [],
  },
  mapHeight: {
    type: Number,
    default: 300
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
  () => props.mapHeight,
  (nv) => {
    if (!resultSection.value) return
    resultSection.value.setAttribute("style", `height: ${nv}px`)
  }
)
</script>

<style lang="scss" scoped>
.map-result-box {
  overflow: hidden;
  background: none;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
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
