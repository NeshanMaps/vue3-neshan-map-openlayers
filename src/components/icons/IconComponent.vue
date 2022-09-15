<template>
  <svg
    :style="`width: ${computedSize}px; height: ${computedSize}px`"
    viewBox="0 0 24 24"
  >
    <path :fill="color || 'currentColor'" :d="inlineSvgs[name].d" />
  </svg>
</template>

<script setup lang="ts">
import { PropType, defineProps, inject, computed } from "vue"
import { RouteTypes } from "../../static/index.model"
import { inlineSvgs } from "../../static/index"
import { Store } from "@/store/store.model"
const props = defineProps({
  name: {
    type: String as PropType<RouteTypes>,
    default: "close",
  },
  size: {
    type: Number,
    default: 15,
  },
  color: String,
  scale: {
    type: Boolean,
    default: true,
  },
})

const computedSize = computed(() => {
  return props.scale ? store.state.scale * props.size : props.size
})

const store = inject<Store>("store") as Store
</script>
