<template>
  <div
    ref="mobileResultViewContainer"
    class="mobile-details-section o-hidden pos-relative"
  >
    <CurvedLoading v-if="!fullScreen && store.state.reverseLoading" class="curved-loading pos-absolute"></CurvedLoading>
    <Icon
      name="close"
      :size="40"
      style="float: left"
      :style="`visibility: ${fullScreen ? 'visible' : 'hidden'};`"
      class="close-icon pos-absolute"
      @click="closeScreen"
    ></Icon>
    <span
      class="drag-button d-block pos-absolute"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <span class="d-block" />
    </span>
    <div
      :style="`height: ${store.state.mapDimensions.height}px;`"
      class="o-auto"
    >
      <PointDetails :item="store.state.selectedMarkerLocation"></PointDetails>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { store } from "@/store"

import Icon from "@/components/icons/index.vue"
import CurvedLoading from "./CurvedLoading.vue"
import PointDetails from "./drawer/result-section/PointDetails.vue"

const mobileResultViewContainer = ref<HTMLDivElement>()
const fullScreen = ref(false)

const handleTouchMove = (evt: TouchEvent) => {
  evt.preventDefault()
  const maxHeight =
    store.state.mapDimensions.height - Math.round(evt.targetTouches[0].clientY)
  mobileResultViewContainer.value?.style.setProperty(
    "max-height",
    `calc(${maxHeight}px + 1.5rem)`
  )
}

const handleTouchEnd = () => {
  if (!mobileResultViewContainer.value) return
  addTemporaryTransition()
  const maxHeight = window.getComputedStyle(
    mobileResultViewContainer.value
  ).maxHeight
  const maxHeightNumber = Number(maxHeight.slice(0, maxHeight.length - 2))
  if (fullScreen.value) {
    if (maxHeightNumber < store.state.mapDimensions.height * 0.8) {
      closeScreen()
    } else {
      mobileResultViewContainer.value.style.setProperty(
        "max-height",
        store.state.mapDimensions.height + "px"
      )
    }
  } else {
    if (maxHeightNumber > store.state.mapDimensions.height / 4) {
      mobileResultViewContainer.value.style.setProperty(
        "max-height",
        store.state.mapDimensions.height + "px"
      )
      mobileResultViewContainer.value.style.setProperty("border-radius", "0")
      fullScreen.value = true
    } else {
      mobileResultViewContainer.value.style.setProperty("max-height", "3rem")
    }
  }
}

const closeScreen = () => {
  fullScreen.value = false
  mobileResultViewContainer.value?.style.removeProperty("border-radius")
  mobileResultViewContainer.value?.style.removeProperty("max-height")
  addTemporaryTransition()
}

const addTemporaryTransition = () => {
  const transitionTime = 0.5
  mobileResultViewContainer.value?.style.setProperty(
    "transition",
    transitionTime + "s"
  )
  setTimeout(() => {
    mobileResultViewContainer.value?.style.removeProperty("transition")
  }, transitionTime * 1000)
}
</script>

<style scoped lang="scss">
.mobile-details-section {
  width: 100%;
  position: absolute;
  z-index: 1000000;
  background-color: white;
  bottom: 0;
  border-radius: 50% / 50px 50px 0 0;
  max-height: 3rem;
  direction: rtl;
  .curved-loading {
    top: 0.3rem;
  }
  .close-icon {
    left: 1rem;
    top: 1rem;
  }
  .drag-button {
    padding-top: 1.5rem;
    padding-bottom: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6rem;
    & > span {
      border-top: 2px solid rgba(0, 0, 0, 0.26);
    }
  }
}
</style>
