<template>
  <div class="map-drawer" :activated="store.state.drawerActivation" ref="mapDrawer">
    <SearchSection
      ref="searchSection"
      v-model:searchText="searchText"
      @submit="emitSearch({ term: $event })"
    ></SearchSection>
    <ResultsSection
      :results="results"
      @result-click="emitResultClick"
      @result-hover="emitResultHover"
    ></ResultsSection>
  </div>
</template>
<script lang="ts">
import { ref, defineProps, PropType, defineEmits, onMounted, watch } from "vue"
import { CoordsObj, SearchItem, SearchProps } from "../Map.model"
import { createCoordsObject } from "@/utils"
export default {
  name: "DrawerComp",
}
</script>
<script setup lang="ts">
import SearchSection from "./SearchSection.vue"
import ResultsSection from "./ResultsSection.vue"
import { store } from "@/store"

const props = defineProps({
  results: Array as PropType<SearchItem[]>,
  searchCoords: {
    type: Object as PropType<CoordsObj>,
    default: () => createCoordsObject(),
  },
  loading: Boolean,
})
const searchText = ref("")
const emits = defineEmits(["search", "result-click", "result-hover"])

const emitSearch = (searchData: SearchProps) => {
  const coordsArr = searchData?.coords || [
    props.searchCoords.longitude,
    props.searchCoords.latitude,
  ]
  const data = {
    term: searchData.term || "",
    coords: coordsArr,
  }
  emits("search", data)
}

const emitResultClick = (item: SearchItem) => {
  emits("result-click", item)
}
const emitResultHover = (item: SearchItem) => {
  emits("result-hover", item)
}

const mapDrawer = ref<HTMLDivElement>()
const searchSection = ref()
/**
 * Changes drawer max-height according to whether its activated or not
 * between 100% and search section height
 * @param activated - whether the drawer is activated or not
 */
const applyDrawerMaxHeight = (activated: boolean) => {
  if (!activated) {
    if (!searchSection.value) return
    const height = searchSection.value.$el.clientHeight
    mapDrawer.value?.setAttribute("style", `max-height: ${height}px;`)
  } else {
    mapDrawer.value?.setAttribute("style", `max-height: 100%;`)
  }
}
watch(() => store.state.drawerActivation, (nv) => {
  applyDrawerMaxHeight(nv)
})
onMounted(() => {
  applyDrawerMaxHeight(store.state.drawerActivation)
})
</script>

<style lang="scss">
.map-drawer {
  position: absolute;
  z-index: 2;
  top: 5%;
  background-color: white;
  right: 2%;
  transition: 0.8s;
  max-width: min-content;
  display: flex;
  flex-flow: column;
  border-radius: 10px;
}

.map-drawer[activated="true"] {
  top: 0;
  right: 0;
  max-height: 100%;
  overflow: hidden;
  border-radius: 0;
}
</style>
