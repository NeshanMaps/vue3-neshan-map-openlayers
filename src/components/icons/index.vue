<template>
  <svg :style="`width: ${size}px; height: ${size}px`" viewBox="0 0 24 24">
    <path fill="currentColor" :d="inlineSvgs[name].d" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType, defineProps } from "vue"
import { IconName } from "../../static/index.model"
export default defineComponent({
  name: "IconIndex",
})
</script>
<script setup lang="ts">
import { inlineSvgs } from "../../static/index"
defineProps({
  name: {
    type: String as PropType<IconName>,
    default: "close",
  },
  size: {
    type: Number,
    default: 15,
  },
})
</script>
