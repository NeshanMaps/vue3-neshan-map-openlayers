<template>
  <div
    v-show="model"
    class="mobile-layers-container pos-absolute o-hidden"
    @click="close"
  >
    <div
      class="mobile-layers pos-absolute px-1"
      :activated="showTiles"
      @click.prevent.stop="() => {}"
    >
      <div class="map-types d-flex justify-center">
        <!-- @click="emit('update:mapType', tile.title)" -->
        <div
          v-for="tile of tiles"
          :key="tile.title"
          :selected="tile.title == store.state.mapType"
          @click="store.setMapType(tile.title)"
        >
          <img :src="tile.url" />
          <div class="desc">
            {{ tile.title[0].toUpperCase() + tile.title.slice(1) }}
          </div>
        </div>
      </div>
      <div class="map-layers d-flex justify-center">
        <div
          class="d-flex justify-center align-center"
          :selected="store.state.poiLayer"
          @click="store.togglePoiLayer()"
        >
          <img :src="require('@/static/poi.png')" />
        </div>
        <div
          class="d-flex justify-center align-center"
          :selected="store.state.trafficLayer"
          @click="store.toggleTrafficLayer()"
        >
          <img :src="require('@/static/traffic.png')" />
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
  set(val) {
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
<style scoped lang="scss">
.mobile-layers-container {
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.221);
  z-index: 1000001;
  .mobile-layers {
    bottom: 0;
    width: 100%;
    transition: 0.2s;
    max-height: 0;
    background-color: white;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    box-sizing: border-box;
    &[activated="true"] {
      max-height: 60%;
    }
    .map-types {
      flex-wrap: wrap;
      padding-top: 1rem;
      padding-bottom: 1rem;
      & > div {
        flex: 0 0 auto;
        width: 33.333333%;
        box-sizing: border-box;
        border: 1px solid rgba(255, 255, 255, 0);
        &[selected="true"] {
          border: 1px solid var(--primary);
          border-radius: 0.5rem;
          color: var(--primary);
        }
      }
    }
    .map-layers {
      flex-wrap: wrap;
      & > div {
        flex: 0 0 auto;
        width: 33.333333%;
        box-sizing: border-box;
        margin: 0 auto 10px auto;
        &[selected="true"] {
          border: 1px solid var(--primary);
          border-radius: 0.5rem;
          color: var(--primary);
        }
        img {
          width: 80%;
        }
      }
    }
  }
}
</style>
