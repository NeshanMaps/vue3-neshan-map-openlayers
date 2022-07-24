<template>
  <div id="drawer" :activated="activated">
    <SearchSection
      v-model:activated="activated"
      @submit="emitSearch({ term: $event })"
    ></SearchSection>
    <ResultsSection
      v-if="activated"
      :results="results"
      :loading="loading"
      @result-click="emitResultClick"
      @result-hover="emitResultHover"
    ></ResultsSection>
  </div>
</template>
<script lang="ts">
import { ref, defineProps, PropType, defineEmits } from 'vue'
import { CoordsObj, SearchItem, SearchProps } from '../Map.model'
import { createCoordsObject } from '@/utils'
export default {
  name: 'DrawerComp',
}
</script>
<script setup lang="ts">
import SearchSection from './SearchSection.vue'
import ResultsSection from './ResultsSection.vue'

const props = defineProps({
  results: Array as PropType<SearchItem[]>,
  searchCoords: {
    type: Object as PropType<CoordsObj>,
    default: () => createCoordsObject(),
  },
  loading: Boolean
})
const activated = ref(false)
const emits = defineEmits(['search', 'result-click', 'result-hover'])

const emitSearch = (searchData: SearchProps) => {
  const coordsArr = searchData?.coords || [
    props.searchCoords.longitude,
    props.searchCoords.latitude,
  ]
  const data = {
    term: searchData.term || '',
    coords: coordsArr,
  }
  emits('search', data)
}

const emitResultClick = (item: SearchItem) => {
  emits('result-click', item)
}
const emitResultHover = (item: SearchItem) => {
  emits('result-hover', item)
}
</script>

<style lang="scss">
#drawer {
  position: absolute;
  z-index: 2;
  top: 5%;
  right: 2%;
  transition: 0.8s;
  max-height: min-content;
  max-width: 300px;
  height: 95%;
  display: flex;
  flex-flow: column;
  border-top-left-radius: 10px;
}

#drawer[activated='true'] {
  top: 0;
  right: 0;
  max-height: 100%;
  height: 100%;
  background-color: white;
  border-top-left-radius: 0;
}
</style>
