<template>
  <div role="status" class="loading-bar" :dense="dense" :style="`color: ${color}`">
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineProps } from 'vue'
export default {
  name: 'LoadingComp',
}
</script>
<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'blue'
  },
  dense: Boolean,
})

</script>

<style lang="scss" scoped>
.loading-bar {
  position: relative;
  width: 100%;
  overflow: hidden;
  font-size: 4px;
  height: 0.3rem;
  &[dense='true'] {
    height: 0.2rem;
  }
  div:first-of-type {
    transition: transform 0.3s;
    opacity: 0.4;
    background: rgba(0, 0, 0, 0.26);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: 0 100%;
    transform: translateX(100%) scale3d(-1, 1, 1);
  }
  div:nth-of-type(2) {
    transition: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: 0 100%;
    transform: translateX(100%) scale3d(-1, 1, 1);
  &::before {
    animation: loading-animation 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)
      infinite;
    background: currentColor;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: 0 0;
  }
  &::after {
    transform: translate3d(-101%, 0, 0) scale3d(1, 1, 1);
    animation: loading-animation-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1)
      infinite;
    animation-delay: 1.15s;
    background: currentColor;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-origin: 0 0;
  }
  }
}

@keyframes loading-animation {
  0% {
    transform: translate3d(-35%, 0, 0) scale3d(0.35, 1, 1);
  }
  60% {
    transform: translate3d(100%, 0, 0) scale3d(0.9, 1, 1);
  }
  to {
    transform: translate3d(100%, 0, 0) scale3d(0.9, 1, 1);
  }
}
@keyframes loading-animation-short {
  0% {
    transform: translate3d(-101%, 0, 0) scale3d(1, 1, 1);
  }
  60% {
    transform: translate3d(107%, 0, 0) scale3d(0.01, 1, 1);
  }
  to {
    transform: translate3d(107%, 0, 0) scale3d(0.01, 1, 1);
  }
}
</style>
