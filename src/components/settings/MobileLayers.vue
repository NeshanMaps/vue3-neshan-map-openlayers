<template>
  <div
    v-show="modelValue"
    class="mobile-settings-container pos-absolute o-hidden"
    :class="settingsBoxClass"
    :style="settingsBoxStyle"
    @click="close"
  >
    <div
      class="mobile-settings pos-absolute px-1"
      :activated="showTiles"
      @click.prevent.stop="() => {}"
    >
      <div class="map-layers d-flex justify-center">
        <div
          class="d-flex justify-between align-center tile"
          :selected="store.state.poiLayer"
          @click="store.actions.map.togglePoi()"
        >
          <img src="../../assets/images/poi.png" />
          <div class="desc text-sm">POI</div>
        </div>
        <div
          class="d-flex justify-between align-center tile"
          :selected="store.state.trafficLayer"
          @click="store.actions.map.toggleTraffic()"
        >
          <img src="../../assets/images/traffic.png" />
          <div class="desc text-sm">Traffic</div>
        </div>
      </div>
      <div class="map-types d-flex justify-center">
        <div
          v-for="tile of tiles"
          :key="tile.title"
          :selected="tile.title == store.state.mapType"
          class="d-flex justify-between align-center tile"
          @click="store.actions.map.setMapType(tile.title)"
        >
          <img :src="tile.url" />
          <div class="desc text-sm">
            {{ tile.title[0].toUpperCase() + tile.title.slice(1) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, ref } from "vue"
import { Tile } from "../Map.model"
import {
  defineEmits,
  defineProps,
  PropType,
  watch,
  getCurrentInstance,
} from "vue"
import { Store } from "@/store/store.model"

const instance = getCurrentInstance()
const store = inject<Store>("store") as Store

const props = defineProps({
  modelValue: Boolean,
  tiles: {
    type: Array as PropType<Tile[]>,
    default: () => [],
  },
  settingsBoxClass: [Array, Object],
  settingsBoxStyle: Object,
})

const emit = defineEmits(["update:modelValue"])

const updateModel = (value: boolean) => {
  emit("update:modelValue", value)
}

const showTiles = ref(false)
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      setTimeout(() => {
        showTiles.value = true
        instance?.proxy?.$forceUpdate()
      }, 200)
    }
  }
)

const close = () => {
  showTiles.value = false
  instance?.proxy?.$forceUpdate()
  setTimeout(() => {
    updateModel(false)
  }, 200)
}
</script>
<style lang="scss" scoped>
.mobile-settings-container {
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.221);
  z-index: 1000001;
  .mobile-settings {
    bottom: 0;
    width: 100%;
    transition: 0.2s;
    max-height: 0;
    background-color: white;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    box-sizing: border-box;
    &[activated="true"] {
      max-height: 70%;
      transition: 0.2s;
    }
    .map-types {
      flex-wrap: wrap;
    }
    .map-layers {
      flex-wrap: wrap;
      margin-top: 1em;
      margin-bottom: 0.5em;
    }
  }
  .tile {
    text-align: center;
    flex: 0 0 auto;
    flex-flow: column;
    width: 6em;
    margin: 0 auto 10px auto;
    height: 6em;
    img {
      height: calc(6em - var(--text-sm) - 0.3em);
      width: calc(6em - var(--text-sm) - 0.3em);
      border-radius: 0.5em;
    }
    &[selected="true"] {
      img {
        border: 1px solid var(--primary);
      }
      color: var(--primary);
    }
  }
}
</style>
