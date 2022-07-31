<template>
  <div
    :activated="store.state.drawerActivation"
    :style="searchBoxStyle"
    class="map-search-box"
    :class="searchBoxClass"
  >
    <input
      type="search"
      name="search"
      placeholder="جستجو"
      v-model="text"
      @keydown.enter="runTimeout(text || privateText, 0)"
      @focus="store.toggleDrawerActivation(true)"
    />
    <button
      v-if="!store.state.drawerActivation"
      @click="store.toggleDrawerActivation(true)"
    >
      <Icon name="magnet" :size="15"></Icon>
    </button>
    <button v-else @click="store.toggleDrawerActivation(false)">
      <Icon name="close" :size="15"></Icon>
    </button>
  </div>
</template>
<script lang="ts">
import { defineProps, defineEmits, ref } from "vue"
import { computed } from "@vue/reactivity"
import { store } from "@/store"
export default {
  name: "SettingsComp",
}
</script>
<script setup lang="ts">
import Icon from "../icons/index.vue"

const props = defineProps({
  searchBoxClass: Array,
  searchBoxStyle: Object,
  typesClass: Array,
  searchText: {
    type: String,
  },
})

const emit = defineEmits([
  "update:search-text",
  "update:search-coords",
  "submit",
])
const text = computed({
  get: () => props.searchText,
  set: (val) => {
    if (!props.searchText) {
      privateText.value = val
    }
    emit("update:search-text", val)
    runTimeout(val)
  },
})

// Defined them in case of not wanting to use with v-model
const privateText = ref(props.searchText)

/**
 * Emits Search Term to the parent component
 * @param term search text
 */
const emitSearch = (term = "") => {
  const inputText = term || text.value?.trim() || privateText.value?.trim()
  emit("submit", inputText)
}

let emitTimeout: number
/**
 * Runs and updates a timeout so after that if fires emitSearch function
 * @param value - searching value
 * @param delay - delay time for emiting search, defaults to 1000
 */
const runTimeout = (value = text.value || privateText.value, delay = 1000) => {
  clearTimeout(emitTimeout)
  if (!value) {
    store.toggleLoading(false)
    return
  } else if (!store.state.loading) {
    store.toggleLoading(true)
  }
  emitTimeout = setTimeout(() => {
    emitSearch(value)
  }, delay)
}
</script>

<style lang="scss">
.map-search-box {
  border-radius: 10px;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  background-color: white;
  box-shadow: 0px 2px 4px 1px #a8a8a8;
  transition: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    border: none;
    background: inherit;
    outline: none;
    line-height: 1.5rem;
    font-size: 1rem;
    height: 2rem;
    padding-right: 0.5rem;
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
    cursor: pointer;
  }
}

.map-search-box[activated="true"] {
  align-items: center;
  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  box-shadow: none;
  // height: 40px;
  margin: 1rem;
  pointer-events: auto;
  // width: 308px;
}
</style>
