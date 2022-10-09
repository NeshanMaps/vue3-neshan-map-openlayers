<template>
  <div
    :style="layersStyle"
    class="map-settings o-hidden pos-absolute"
    :class="layersClass"
  >
    <div class="justify-between d-flex">
      <div
        v-for="tile of tiles"
        :key="tile.title"
        @click="store.actions.map.setMapType(tile.title)"
        class="pointer tile"
        :selected="tile.title == store.state.mapType"
      >
        <img :src="tile.url" />
        <div class="text-sm">
          {{ tile.title[0].toUpperCase() + tile.title.slice(1) }}
        </div>
      </div>
    </div>
    <div class="d-flex justify-around poi-traffic">
      <div
        class="pointer tile"
        :selected="store.state.poiLayer"
        @click="store.actions.map.togglePoi()"
      >
        <img src="@/assets/images/poi.png" />
        <div class="text-sm">Poi</div>
      </div>
      <div
        class="pointer tile"
        :selected="store.state.trafficLayer"
        @click="store.actions.map.toggleTraffic()"
      >
        <img src="@/assets/images/traffic.png" />
        <div class="text-sm">Traffic</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Store } from "@/store/store.model"
import { defineProps, inject, PropType } from "vue"
import { Tile } from "../Map.model"
defineProps({
  tiles: {
    type: Array as PropType<Tile[]>,
    default: () => [],
  },
  layersClass: [String, Array, Object],
  layersStyle: Object,
})

const store = inject<Store>("store") as Store
</script>

<style lang="scss" scoped>
.map-settings {
  background-color: white;
  border-radius: 0.5em;
  border: 1px solid rgb(142, 142, 142);
  z-index: 10;
  bottom: 4%;
  left: 1%;
  max-width: 6em;
  max-height: 6em;
  transition: 0.5s;
  box-sizing: border-box;
  &:hover {
    max-width: 38em;
    max-height: 100%;
    transition: 1s;
    border: 1px solid rgba(142, 142, 142, 0.409);
  }
  .tile {
    text-align: center;
    width: 6.5em;
    transition: 0.5s;
    img {
      height: 6em;
      width: 6em;
      border-radius: 0.5em;
      border: 1px solid rgba(0, 0, 0, 0);
    }
    &[selected="true"] {
      img {
        border: 1px solid var(--primary);
      }
      color: var(--primary);
    }
  }
  .poi-traffic {
    .tile {
      &:not([selected="true"]) {
        filter: grayscale(0.8);
      }
    }
  }
}
</style>
