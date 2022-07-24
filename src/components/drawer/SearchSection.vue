<template>
  <div
    id="search-box"
    :activated="activated"
    dir="rtl"
    :style="searchBoxStyle"
    :class="searchBoxClass"
  >
    <input
      type="search"
      name="search"
      placeholder="جستجو"
      v-model="text"
      @keydown.enter="runTimeout(0)"
      @input="runTimeout()"
      @focus="emitActivation(true)"
    >
    <button v-if="!activated" @click="emitActivation(true)">
      <Icon name="magnet" :size="15"></Icon>
    </button>
    <button v-else @click="emitActivation(false)">
      <Icon name="close" :size="15"></Icon>
    </button>
  </div>
</template>
<script lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { computed } from '@vue/reactivity'
export default {
  name: 'SettingsComp',
}
</script>
<script setup lang="ts">
import Icon from '../icons/index.vue'

const props = defineProps({
  searchBoxClass: Array,
  searchBoxStyle: Object,
  typesClass: Array,
  activated: Boolean,
  searchText: {
    type: String,
    default: '',
  },
})

const emit = defineEmits([
  'update:search-text',
  'update:search-coords',
  'update:activated',
  'submit',
])
const text = computed({
  get: () => props.searchText,
  set: (val) => {
    privateText.value = val
    emit('update:search-text', val)
  },
})

// Defined them in case of not wanting to use with v-model
const privateText = ref(props.searchText)

/**
 * Emits Search Term to the parent component
 * @param term search text
 */
const emitSearch = (term = '') => {
  const inputText = term || text.value || privateText.value
  emit('submit', inputText)
}

/**
 * Emits activation value to weather the component should be expanded or collapsed
 */
const emitActivation = (val: boolean) => {
  emit('update:activated', val)
}

let emitTimeout: number;
/**
 * Runs and updates a timeout so after that if fires emitSearch function
 */
const runTimeout = (delay = 1000) => {
  clearTimeout(emitTimeout)
  const value = text.value || privateText.value
  if (!value) return
  emitTimeout = setTimeout(() => {
    emitSearch(value)
  }, delay)
}
</script>

<style lang="scss">
#search-box {
  border-radius: 10px;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  background-color: white;
  box-shadow: 0px 2px 4px 1px #a8a8a8;
  transition: 0.8s;
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
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
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

#search-box[activated='true'] {
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
