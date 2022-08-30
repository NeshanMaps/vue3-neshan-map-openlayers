<template>
  <div
    v-show="model"
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
          class="d-flex justify-center align-center tile"
          :selected="store.state.poiLayer"
          @click="store.togglePoiLayer()"
        >
          <img :src="require('@/static/poi.png')" />
          <div class="desc text-sm">POI</div>
        </div>
        <div
          class="d-flex justify-center align-center tile"
          :selected="store.state.trafficLayer"
          @click="store.toggleTrafficLayer()"
        >
          <img :src="require('@/static/traffic.png')" />
          <div class="desc text-sm">Traffic</div>
        </div>
      </div>
      <div class="map-types d-flex justify-center">
        <!-- @click="emit('update:mapType', tile.title)" -->
        <div
          v-for="tile of tiles"
          :key="tile.title"
          :selected="tile.title == store.state.mapType"
          class="d-flex justify-center align-center tile"
          @click="store.setMapType(tile.title)"
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
import { computed, ref } from "@vue/reactivity"
import { Tile } from "../Map.model"
import { defineEmits, defineProps, PropType, watch } from "vue"
import { store } from "@/store"

const props = defineProps({
  value: Boolean,
  tiles: {
    type: Array as PropType<Tile[]>,
    default: () => [],
  },
  settingsBoxClass: [Array, Object],
  settingsBoxStyle: Object,
})

const emit = defineEmits([
  "update:value",
  "update:mapType",
  "update:traffice",
  "update:poi",
])
const model = computed({
  get() {
    return props.value
  },
  set(val: boolean) {
    emit("update:value", val)
  },
})
const showTiles = ref(false)
watch(model, (nv) => {
  if (nv) {
    setTimeout(() => {
      showTiles.value = nv
    }, 200)
  }
})

const close = () => {
  showTiles.value = false
  setTimeout(() => {
    model.value = false
  }, 200)
}
</script>
<style lang="scss">
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
    flex: 0 0 auto;
    flex-flow: column;
    width: 6em;
    margin: 0 auto 10px auto;
    height: 6em;
    img {
      height: 5em;
      width: 5em;
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
