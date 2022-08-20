<template>
  <div
    v-show="model"
    class="mobile-layers-container pos-absolute o-hidden"
    @click="close"
  >
    <div
      class="mobile-layers pos-absolute"
      :activated="showTiles"
      @click.prevent.stop="() => {}"
    >
      <div class="map-tiles d-flex justify-center">
        <!-- @click="emit('update:mapType', tile.title)" -->
        <div
          v-for="tile of tiles"
          :key="tile.title"
          class="tile"
          :class="{ 'selected-tile': tile.title == mapType }"
        >
          <img :src="tile.url" />
          <div class="desc">
            {{ tile.title }}
          </div>
        </div>
      </div>
      <div class="map-checkboxes">
        <label
          >poi
          <input type="checkbox" name="poi" />
        </label>
        <label for="traffic"
          >traffic
          <input type="checkbox" name="traffic" />
        </label>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "@vue/reactivity"
import { Tile } from "../Map.model"
import { defineEmits, defineProps, PropType, watch } from "vue"
import { MapType } from "../Map.model"

const props = defineProps({
  value: Boolean,
  mapType: {
    type: String as PropType<MapType>,
    default: "neshan",
  },
  tiles: {
    type: Array as PropType<Tile[]>,
    default: () => [],
  },
})

const emit = defineEmits(["update:value"])
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
    &[activated="true"] {
      max-height: 60%;
    }
    .map-tiles {
      flex-wrap: wrap;
      padding-top: 1rem;
      padding-bottom: 1rem;
      .tile {
        flex: 0 0 auto;
        width: 33.333333%;
        box-sizing: border-box;
        img {
          width: 15vw;
          height: 15vw;
        }
      }
    }
  }
}
</style>
