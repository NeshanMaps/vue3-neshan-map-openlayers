<template>
  <div id="settings" :style="settingsBoxStyle" :class="settingsBoxClass">
    <div id="tiles">
      <div
        v-for="tile of tiles"
        :key="tile.title"
        @click="emit('update:mapType', tile.title)"
        class="tile"
        :class="{ 'selected-tile': tile.title == mapType }"
      >
        <img :src="tile.url" />
        <div class="desc">
          {{ tile.title }}
        </div>
      </div>
    </div>
    <div id="checkboxes">
      <label
        >poi
        <input type="checkbox" name="poi" v-model="poiLayer" />
      </label>
      <label for="traffic"
        >traffic
        <input type="checkbox" name="traffic" v-model="trafficLayer" />
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { defineProps, PropType, defineEmits } from "vue";
import { MapType, Tile } from "../Map.model";
import { computed } from "@vue/reactivity";
export default {
  name: "SettingsComp",
};
</script>
<script setup lang="ts">
const props = defineProps({
  poi: Boolean,
  traffic: Boolean,
  mapType: {
    type: String as PropType<MapType>,
    default: "neshan",
  },
  tiles: {
    type: Array as PropType<Tile[]>,
    default: () => []
  },
  settingsBoxClass: Array,
  settingsBoxStyle: Object,
  typesClass: Array,
});

const emit = defineEmits(["update:mapType", "update:poi", "update:traffic"]);

const poiLayer = computed({
  get: () => props.poi,
  set: (val) => emit("update:poi", val),
});
const trafficLayer = computed({
  get: () => props.traffic,
  set: (val) => emit("update:traffic", val),
});
</script>

<style lang="scss">
#settings {
  background-color: white;
  border-radius: 0.5vw;
  border: 1px solid rgb(178, 178, 178);
  position: absolute;
  z-index: 10;
  bottom: 3.5vh;
  max-width: 8.6vw;
  max-height: 8vw;
  overflow: hidden;
  transition: 0.5s;
  &:hover {
    max-width: 100%;
    max-height: 100%;
    transition: 1s;
  }
}

#checkboxes {
  display: flex;
  justify-content: space-around;
  padding-top: 1vw;
  padding-bottom: 1vw;
}

#tiles {
  display: flex;
}

.tile {
  cursor: pointer;
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
  border: 1px solid rgb(145, 145, 145);
}
</style>
