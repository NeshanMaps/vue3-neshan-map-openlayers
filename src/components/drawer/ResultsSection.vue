<template>
  <div
    :style="resultBoxStyle"
    :class="resultBoxClass"
    class="map-result-box neshan-scroll-bar"
    open
  >
    <Loading
      v-if="loading"
      dense
      color="blue"
    />
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
import { defineProps, PropType, defineEmits } from 'vue'
import { SearchItem } from '../Map.model'
export default {
  name: 'ResultBox',
}
</script>
<script setup lang="ts">
import ResultItem from './ResultItem.vue'
import Loading from '../Loading.vue'
defineProps({
  resultBoxClass: Array,
  resultBoxStyle: Object,
  results: {
    type: Array as PropType<SearchItem[]>,
    default: () => [],
  },
  loading: Boolean
})

const emits = defineEmits(['result-hover', 'result-click'])
const emitHover = (item: SearchItem) => {
  emits('result-hover', item)
}
const emitClick = (item: SearchItem) => {
  emits('result-click', item)
}
</script>

<style lang="scss" scoped>
.map-result-box {
  overflow: auto;
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
