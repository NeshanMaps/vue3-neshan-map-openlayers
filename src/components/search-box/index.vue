<template>
  <div id="search-box" :style="searchBoxStyle" :class="searchBoxClass">
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
import { CoordsObj, SearchProps } from "../Map.model";
import { computed } from "@vue/reactivity";
import { createCoordsObject } from "@/utils";
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
    default: () => createCoordsObject()
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

/**
 * Emits Search Properties to the parent component
 * @param val.term search text
 * @param val.coords search coords
 */
const emitSearch = (val: SearchProps = {}) => {
  const inputText = val?.term || text.value || privateText.value
  const coordsArr = val?.coords || Object.values(coords.value || privateCoords.value)
  const data = {
    term: inputText,
    coords: coordsArr
  }
  emit('submit', data)
}
</script>

<style lang="scss">
#search-box {
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  border: 1px solid rgb(116, 116, 116);
  button {
    border-radius: 5px;
    background-color: white;
    border-width: 1px;
    padding: 3px 6px;
    cursor: pointer;
  }
  input {
    margin: 1px;
  }
}
</style>
