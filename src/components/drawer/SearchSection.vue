<template>
  <div
    :activated="store.state.drawerActivation"
    :style="`width: ${width}; ${searchBoxStyle}`"
    class="map-search-box d-flex justify-between align-center mx-auto"
    :class="searchBoxClass"
  >
    <input
      type="search"
      name="search"
      placeholder="جستجو"
      v-model="text"
      @keydown.enter="runTimeout(text, 0)"
      @focus="store.state.drawerActivation = true"
    />
    <button
      v-if="store.state.drawerShowDetails && !store.getters.touchPlatform"
      @click="store.state.drawerShowDetails = false"
      class="pointer"
    >
      <Icon name="back" :size="19"></Icon>
    </button>
    <button
      v-if="!store.state.drawerActivation"
      @click="store.state.drawerActivation = true"
      class="pointer"
    >
      <Icon name="magnet" :size="19"></Icon>
    </button>
    <button v-else class="pointer" @click="store.state.drawerActivation = false">
      <Icon name="close" :size="19"></Icon>
    </button>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed, inject } from "vue"
import Icon from "../icons/IconComponent.vue"
import { drawerConstants } from "@/parameters"
import { Store } from "@/store/store.model";

const props = defineProps({
  searchBoxClass: [String, Array, Object],
  searchBoxStyle: Object,
  searchText: {
    type: String,
  },
})

const store = inject<Store>('store') as Store

const width = drawerConstants.width
const emit = defineEmits([
  "update:search-text",
  "update:search-coords",
  "submit",
])
const text = computed({
  get: () => props.searchText,
  set: (val) => {
    emit("update:search-text", val)
    runTimeout(val)
  },
})

/**
 * Emits Search Term to the parent component
 * @param term search text
 */
const emitSearch = (term = "") => {
  const inputText = term || text.value?.trim()
  emit("submit", inputText)
}

let emitTimeout: number
/**
 * Runs and updates a timeout so after that if fires emitSearch function
 * @param value - searching value
 * @param delay - delay time for emiting search, defaults to 1000
 */
const runTimeout = (value = text.value, delay = 1000) => {
  clearTimeout(emitTimeout)
  if (!value) {
    store.state.searchLoading = false
    return
  } else if (!store.state.searchLoading) {
    store.state.searchLoading = true
  }
  emitTimeout = window.setTimeout(() => {
    emitSearch(value)
  }, delay)
}
</script>

<style lang="scss" scoped>
.touch .map-search-box input[type="search"] {
  line-height: 1.7em;
  font-size: var(--text-lg);
  height: 2.7em;
}
.map-search-box {
  border-radius: 0.7em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  background-color: white;
  transition: inherit;
  input[type="search"] {
    border: none;
    background: inherit;
    outline: none;
    line-height: 1.5em;
    font-size: 1em;
    height: 2.3em;
    padding-right: 0.5em;
    width: 100%;
    font-family: inherit;
  }
  input[type="search"]:-webkit-autofill,
  input[type="search"]:-webkit-autofill:hover,
  input[type="search"]:-webkit-autofill:focus,
  input[type="search"]:-webkit-autofill:active {
    // To stop the browser from changing background color
    transition: background-color 5000s ease-in-out 0s;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  button {
    border-radius: 5px;
    background-color: inherit;
    border: none;
    padding: 0;
  }
}

.map-search-box[activated="true"] {
  align-items: center;
  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  box-shadow: none;
  // height: 40px;
  margin-top: 1em;
  margin-bottom: 1em;
  pointer-events: auto;
  // width: 308px;
}
</style>
