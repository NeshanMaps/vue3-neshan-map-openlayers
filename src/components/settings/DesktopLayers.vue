<template>
  <div
    :style="settingsBoxStyle"
    class="map-settings o-hidden pos-absolute"
    :class="settingsBoxClass"
  >
    <div class="map-tiles justify-between d-flex">
      <div
        v-for="tile of tiles"
        :key="tile.title"
        @click="store.setMapType(tile.title)"
        class="pointer"
        :selected="tile.title == store.state.mapType"
      >
        <img :src="tile.url" />
        <div class="desc text-nm">
          {{ tile.title[0].toUpperCase() + tile.title.slice(1) }}
        </div>
      </div>
    </div>
    <div class="map-layers d-flex mt-1">
      <div
        class="d-flex justify-center align-center pointer"
        :selected="store.state.poiLayer"
        @click="store.togglePoiLayer()"
      >
        <img :src="require('@/static/poi.png')" />
      </div>
      <div
        class="d-flex justify-center align-center pointer"
        :selected="store.state.trafficLayer"
        @click="store.toggleTrafficLayer()"
      >
        <img :src="require('@/static/traffic.png')" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType } from "vue"
import { Tile } from "../Map.model"
import { store } from "@/store"
defineProps({
  tiles: {
    type: Array as PropType<Tile[]>,
    default: () => [],
  },
  settingsBoxClass: [Array, Object],
  settingsBoxStyle: Object,
})
</script>

<style lang="scss" scoped>
.map-settings {
  background-color: white;
  border-radius: 0.5em;
  border: 1px solid rgb(178, 178, 178);
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
  }
  div [selected="true"] {
    border: 1px solid var(--primary);
    border-radius: 0.5em;
    color: var(--primary);
  }
  .map-tiles {
    & > div {
      &:not([selected="true"]) {
        border: 1px solid rgba(255, 255, 255, 0);
      }
      img {
        width: 6em;
        height: 6em;
        border-radius: 1em;
      }
      .desc {
        overflow: hidden;
        padding-right: 0.1em;
        padding-left: 0.1em;
        text-align: center;
      }
    }
  }
  .map-layers {
    & > div {
      width: 45%;
      box-sizing: border-box;
      margin: 0 auto 10px auto;
      transition: 0.2s;
      img {
        width: 4em;
      }
      &:not([selected="true"]) {
        border: 1px solid rgba(255, 255, 255, 0);
        filter: grayscale(1);
      }
    }
  }
}
</style>
