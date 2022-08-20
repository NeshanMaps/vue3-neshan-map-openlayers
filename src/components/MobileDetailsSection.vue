<template>
  <div
    ref="mobileResultViewContainer"
    class="mobile-details-section pos-relative"
  >
    <button class="close-modal-button pos-absolute d-flex justify-center align-center" @click="hideModal">
      <Icon :size="25"></Icon>
    </button>
    <Loading v-show="store.state.reverseLoading" class="curved-loading pos-absolute" />
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
      <PointDetails :item="store.state.selectedMarker" :collapse="!fullScreen"></PointDetails>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { store } from "@/store"

import Icon from "@/components/icons/IconComponent.vue"
import PointDetails from "./drawer/result-section/PointDetails.vue"
import Loading from "./LoadingComp.vue"

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

const hideModal = () => {
  store.actions.markers.deselectAll()
}

</script>

<style scoped lang="scss">
.mobile-details-section {
  width: 100%;
  position: absolute;
  z-index: 1000000;
  background-color: white;
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
  max-height: 3rem;
  direction: rtl;
  .curved-loading {
    top: 0;
  }
  .close-icon {
    left: 1rem;
    top: 1rem;
    z-index: 2;
  }
  .drag-button {
    padding-top: 1.5rem;
    padding-bottom: 4rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    & > span {
      background-color: #cecece;
      border-radius: 25px;
      height: 5px;
      width: 30px;
      margin: auto;
    }
  }
  .close-modal-button {
    top: calc(-2rem - 20px);
    right: 1rem;
    z-index: 2;
    background-color: white;
    border: none;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  }
}
</style>
