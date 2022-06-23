<template>
  <div id="search-form" :style="searchBoxStyle" :class="searchBoxClass">
    <label class="justify-between">
      <input
        dir="rtl"
        type="search"
        name="search"
        v-model="text"
        @keydown.enter="emitSearch()"
      />
      :متن جستجو
    </label>
    <br />
    <label class="justify-between">
      Latitude:
      <input type="text" name="coords" v-model="coords.latitude" />
    </label>
    <br />
    <label class="justify-between">
      Longitude:
      <input type="text" name="coords" v-model="coords.longitude" />
    </label>
    <br />
    <button @click="emitSearch()">جستجو</button>
  </div>
</template>
<script lang="ts">
import { defineProps, PropType, defineEmits, ref } from "vue";
import { CoordsObj } from "../Map.model";
import { computed } from "@vue/reactivity";
import { getLocation } from "../Map.util";
export default {
  name: "SettingsComp",
};
</script>
<script setup lang="ts">
const props = defineProps({
  searchBoxClass: Array,
  searchBoxStyle: Object,
  typesClass: Array,
  searchText: {
    type: String,
    default: ''
  },
  searchCoords: {
    type: Object as PropType<CoordsObj>,
    default: async () => {
      const coordsArr = await getLocation()
      return {
        latitude: coordsArr[1],
        longitude: coordsArr[0]
      }
    }
  },
});

const emit = defineEmits([
  "update:mapType",
  "update:search-text",
  "update:search-coords",
  'submit'
]);
const text = computed({
  get: () => props.searchText,
  set: (val) => {
    privateText.value = val
    emit("update:search-text", val)
  },
});
const coords = computed({
  get: () => props.searchCoords,
  set: (val) => {
    privateCoords.value = val
    emit("update:search-coords", val)
  },
});

// Defined them in case of not wanting to use with v-model
const privateText = ref(props.searchText)
const privateCoords = ref(props.searchCoords)

const emitSearch = (val = { text: text.value || privateText.value, coords: coords.value || privateCoords.value }) => {
  emit('submit', val)
}
</script>

<style lang="scss">
#search-form {
  padding: 1rem;
  position: absolute;
  z-index: 2;
  background-color: white;
  border: 1px solid rgb(116, 116, 116);
  min-width: 300px;
  max-width: 50vw;
  top: 4vh;
  left: 4vw;
}
.justify-between {
  display: flex;
  justify-content: space-between;
}
</style>
