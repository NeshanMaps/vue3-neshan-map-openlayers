<template>
  <div
    :class="{
      'map-drawer--mobile': store.getters.touchPlatform,
      'map-drawer--desktop': !store.getters.touchPlatform,
      'map-drawer--desktop---activated':
        !store.getters.touchPlatform && store.state.drawerActivation,
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
      :items="items"
      @result-click="emitResultClick"
      @result-hover="emitResultHover"
    ></ResultsSection>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, PropType, defineEmits, onMounted, watch, inject } from "vue"
import { CoordsObj, HandleSearchProps } from "../Map.model"
import { createCoordsObject } from "@/utils"
import SearchSection from "./SearchSection.vue"
import ResultsSection from "./result-section/ResultsSection.vue"
import { SearchItem } from "../../store/markers/markers.model"
import { Store } from "@/store/store.model"

const props = defineProps({
  items: Array as PropType<SearchItem[]>,
  searchCoords: {
    type: Object as PropType<CoordsObj>,
    default: () => createCoordsObject(),
  },
  loading: Boolean,
})

const store = inject<Store>('store') as Store

const searchText = ref("")
const emits = defineEmits(["search", "result-click", "result-hover"])

const emitSearch = (searchData: HandleSearchProps) => {
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
  if (!searchSection.value || !mapDrawer.value) return
  if (!activated) {
    const height = searchSection.value.$el.clientHeight
    const width = searchSection.value.$el.clientWidth
    mapDrawer.value.style.setProperty("max-height", `${height}px`)
    mapDrawer.value.style.setProperty("max-width", `${width}px`)
  } else {
    mapDrawer.value.style.setProperty("max-height", "100%")
    mapDrawer.value.style.setProperty("max-width", "100%")
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
.map-drawer--desktop {
  position: absolute;
  z-index: 2;
  top: 5%;
  background-color: white;
  right: 2%;
  transition: 0.6s;
  max-width: min-content;
  border-radius: 0.7em;
  overflow: hidden;
  &[activated="true"] {
    top: 0;
    right: 0;
    max-height: 100%;
    border-radius: 0;
    padding-right: 1em;
    padding-left: 1em;
  }
}

.map-drawer--desktop---activated {
  box-shadow: 0 4px 25px rgb(0 0 0 / 25%);
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
  border-radius: 0.7em;
  overflow: hidden;
  &[activated="true"] {
    top: 0;
    max-height: 100%;
    max-width: 100%;
    border-radius: 0;
  }
}
</style>
