<template>
  <div id="result-box" :style="resultBoxStyle" :class="resultBoxClass">
    as
  </div>
</template>
<script lang="ts">
import { defineProps, PropType } from 'vue';
import { SearchItem } from '../Map.model';
export default {
  name: 'ResultBox'
}
</script>
<script setup lang="ts">
const props = defineProps({
  resultBoxClass: Array,
  resultBoxStyle: Object,
  results: Array as PropType<SearchItem[]>
})
</script>