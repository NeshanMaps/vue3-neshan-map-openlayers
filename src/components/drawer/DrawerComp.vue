<template>
  <div
    :class="{
      'map-drawer--mobile': store.getters.screen.small,
      'map-drawer': !store.getters.screen.small,
      'box-shadow': !store.state.drawerActivation,
    }"
    class="d-flex flex-column"
    :activated="store.state.drawerActivation"
    ref="mapDrawer"
  >
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
<script setup lang="ts">
import { ref, defineProps, PropType, defineEmits, onMounted, watch } from "vue"
import { CoordsObj, SearchItem, SearchProps } from "../Map.model"
import { createCoordsObject } from "@/utils"
import SearchSection from "./SearchSection.vue"
import ResultsSection from "./result-section/ResultsSection.vue"
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
 * Changes drawer max-height & max-width according to whether its activated or not
 * between 100% and search section dimenstions
 * @param activated - whether the drawer is activated or not
 */
const toggleDrawerMaxDimenstions = (activated: boolean) => {
  if (!activated) {
    if (!searchSection.value) return
    const height = searchSection.value.$el.clientHeight
    const width = searchSection.value.$el.clientWidth
    mapDrawer.value?.setAttribute(
      "style",
      `max-height: ${height}px; max-width: ${width}px;`
    )
  } else {
    mapDrawer.value?.setAttribute("style", `max-height: 100%; max-width: 100%;`)
  }
}
watch(
  () => store.state.drawerActivation,
  (nv) => {
    toggleDrawerMaxDimenstions(nv)
  }
)
onMounted(() => {
  toggleDrawerMaxDimenstions(store.state.drawerActivation)
})
</script>

<style lang="scss" scoped>
.map-drawer {
  position: absolute;
  z-index: 2;
  top: 5%;
  background-color: white;
  right: 2%;
  transition: 0.6s;
  max-width: min-content;
  border-radius: 10px;
  overflow: hidden;
  &[activated="true"] {
    top: 0;
    right: 0;
    max-height: 100%;
    border-radius: 0;
    padding-right: 1rem;
    padding-left: 1rem;
  }
}

.map-drawer--mobile {
  position: absolute;
  z-index: 2;
  top: 5%;
  background-color: white;
  right: 50%;
  transform: translateX(50%);
  transition: 0.6s;
  max-width: min-content;
  border-radius: 10px;
  overflow: hidden;
  &[activated="true"] {
    top: 0;
    max-height: 100%;
    max-width: 100%;
    border-radius: 0;
  }
}
</style>