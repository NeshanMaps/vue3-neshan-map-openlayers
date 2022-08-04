<template>
  <div ref="containerRef" class="wrapper" style="--height: 50px">
    <div class="clipping">
      <div class="loading"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, defineProps } from "vue"
import { dimensionsMixin } from "@/mixins"
const props = defineProps({
  color: String,
})
const containerRef = ref<HTMLDivElement>()
const { width } = dimensionsMixin({ containerRef })

watch(width, (nv) => {
  containerRef.value?.style.setProperty("--container-width", nv + "px")
})
watch(() => props.color, (nv) => {
  containerRef.value?.style.setProperty("--border-color", nv + "px")
})

onMounted(() => {
  containerRef.value?.style.setProperty("--border-color", props.color || "blue")
  containerRef.value?.style.setProperty("--container-width", width.value + "px")
})
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: var(--height);
  overflow: hidden;
}
.clipping {
  position: absolute;
  width: 100%;
  animation-name: clipper;
  animation-duration: 1.3s;
  // animation-timing-function: cubic-bezier(0.65, 0.815, 0.735, 0.395);
  animation-iteration-count: infinite;
}
.loading {
  height: var(--height);
  border: solid 4px #000;
  border-color: var(--border-color) transparent transparent transparent;
  border-radius: 50% / var(--height) var(--height) 0 0;
}
@keyframes clipper {
  0% {
    clip: rect(0px, 0px, var(--height), 0px);
  }
  35% {
    clip: rect(0px, var(--container-width), var(--height), 0px);
  }
  // 70% {
  //   clip: rect(0px, var(--container-width), var(--height), var(--container-width));
  // }
  // 70.001% {
  //   clip: rect(0px, 0px, var(--height), 0px);
  // }
  // 85% {
  //   clip: rect(0px, var(--container-width), var(--height), 0px);
  // }
  100% {
    clip: rect(0px, var(--container-width), var(--height), var(--container-width));
  }
}
</style>
