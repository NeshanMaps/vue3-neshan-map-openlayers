<template>
  <svg :style="`width: ${size}px; height: ${size}px`" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M17,16H15V22H12V17H8V22H5V16H3L10,10L17,16M6,2L10,6H9V9H7V6H5V9H3V6H2L6,2M18,3L23,8H22V12H19V9H17V12H15.34L14,10.87V8H13L18,3Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NeighbourhoodIcon",
  props: {
    size: {
      type: Number,
      default: 24,
    },
  },
});
</script>
