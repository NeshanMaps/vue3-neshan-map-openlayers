<template>
  <div :style="settingsBoxStyle" class="map-settings o-hidden pos-absolute" :class="settingsBoxClass">
    <div class="map-tiles justify-between">
      <div
        v-for="tile of tiles"
        :key="tile.title"
        @click="store.setMapType(tile.title)"
        class="tile pointer"
        :class="{ 'selected-tile': tile.title == store.state.mapType }"
      >
        <img :src="tile.url" />
        <div class="desc">
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
  settingsBoxClass: Array,
  settingsBoxStyle: Object,
})
</script>

<style lang="scss" scoped>
.map-settings {
  background-color: white;
  border-radius: 0.5vw;
  border: 1px solid rgb(178, 178, 178);
  z-index: 10;
  bottom: 3.5vh;
  left: 1vw;
  max-width: 8.6vw;
  max-height: 8vw;
  transition: 0.5s;
  &:hover {
    max-width: 700px;
    max-height: 100%;
    transition: 1s;
  }
  .map-layers {
    flex-wrap: wrap;
    & > div {
      flex: 0 0 auto;
      width: 25%;
      box-sizing: border-box;
      margin: 0 auto 10px auto;
      &[selected="true"] {
        border: 1px solid var(--primary);
        border-radius: 0.5rem;
        color: var(--primary);
      }
      img {
        width: 40%;
      }
    }
  }
}

.map-checkboxes {
  display: flex;
  justify-content: space-around;
  padding-top: 1vw;
  padding-bottom: 1vw;
}

.map-tiles {
  display: flex;
}

.tile {
  border: 1px solid rgba(255, 255, 255, 0);
  img {
    width: 8vw;
    height: 8vw;
    border-radius: 1vw;
    margin-left: 0.3vw;
    margin-right: 0.3vw;
  }
}

.desc {
  overflow: hidden;
  padding-right: 0.1vw;
  padding-left: 0.1vw;
  text-align: center;
  font-size: small;
}

.selected-tile {
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  color: var(--primary);
}
</style>
