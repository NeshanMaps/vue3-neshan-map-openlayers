<template>
  <details
    id="result-box"
    :style="resultBoxStyle"
    :class="resultBoxClass"
    class="neshan-scroll-bar"
    open
  >
    <!-- <summary dir="rtl" class="select-none">
      نتایج:
      <template v-if="results.length !== 0"> &nbsp; ({{ results.length }}) </template>
    </summary> -->
    <ul>
      <ResultItem
        v-for="item in results"
        :key="'' + item.location.x + item.location.y"
        :item="item"
        @mouseenter="emitHover(item)"
      />
    </ul>
  </details>
</template>
<script lang="ts">
import { defineProps, PropType, defineEmits } from "vue";
import { SearchItem } from "../Map.model";
export default {
  name: "ResultBox",
};
</script>
<script setup lang="ts">
import ResultItem from "./ResultItem.vue";
defineProps({
  resultBoxClass: Array,
  resultBoxStyle: Object,
  results: {
    type: Array as PropType<SearchItem[]>,
    default: () => []
  },
});

const emits = defineEmits(['result-hover'])
const emitHover = (item: SearchItem) => {
  emits('result-hover', item)
}
</script>

<style lang="scss" scoped>
#result-box {
  margin-top: 10px;
  background-color: white;
  border: 1px solid rgb(110, 110, 110);
  border-radius: 10px;
  overflow: auto;
  max-height: 30vh;

  summary {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
}

/* width */
::-webkit-scrollbar {
  width: 10px;
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
