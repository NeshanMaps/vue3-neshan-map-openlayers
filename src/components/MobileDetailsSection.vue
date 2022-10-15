<template>
  <div
    ref="mobileDetailsSectionContainer"
    class="mobile-details-section pos-absolute"
    :class="{ fullScreen }"
  >
    <button
      class="close-modal-button pos-absolute d-flex justify-center align-center"
      @click="hideModal"
    >
      <Icon :size="25"></Icon>
    </button>
    <div
      ref="detailsContainer"
      :class="fullScreen ? 'o-auto' : 'o-hidden'"
      :style="`
        max-height: ${detailsContainerMaxHeight};
        border-radius: ${detailsContainerBorderRadius};
        transition: ${detailsContainerTransition};`"
    >
      <Loading v-show="store.state.reverseLoading" class="curved-loading" />
      <Icon
        name="close"
        :size="40"
        :style="`visibility: ${fullScreen ? 'visible' : 'hidden'};`"
        class="close-icon pos-absolute"
        @click="closeScreen"
      ></Icon>
      <span
        class="drag-button d-block pos-absolute"
        :style="`padding-top: calc(${drawerConstants.bottomSheetloadingHeight}/2)`"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <span class="d-block" />
      </span>
      <div
        :style="`
      height: ${store.state.mapDimensions.height}px;
      margin-top: ${drawerConstants.bottomSheetloadingHeight};`"
      >
        <PointDetails :item="store.state.selectedMarker"></PointDetails>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, ref, watch } from "vue"
import { drawerConstants } from "@/parameters"
import type { Store } from '@/store/store.model'

import Icon from "@/components/icons/IconComponent.vue"
import PointDetails from "./drawer/result-section/PointDetails.vue"
import Loading from "./LoadingComp.vue"

const store = inject<Store>('store') as Store

const mobileDetailsSectionContainer = ref<HTMLDivElement>()
const detailsContainer = ref<HTMLDivElement>()
const fullScreen = ref(false)
const detailsContainerMaxHeight = ref(drawerConstants.bottomSheetNormalHeight)
const detailsContainerBorderRadius = ref(
  drawerConstants.bottomSheetBorderRadius
)
const detailsContainerTransition = ref("0")

const handleTouchMove = (evt: TouchEvent) => {
  evt.preventDefault()
  if (!mobileDetailsSectionContainer.value || !store.state.mapContainer) return
  const mapClientBottom =
    store.state.mapContainer.getBoundingClientRect().bottom
  const additionalHeight = mapClientBottom - evt.touches[0].clientY
  detailsContainerMaxHeight.value = additionalHeight + "px"
}

const handleTouchEnd = () => {
  if (!detailsContainer.value) return
  addTemporaryTransition()
  const maxHeight = detailsContainerMaxHeight.value
  const currentHeight = Number(maxHeight.slice(0, maxHeight.length - 2))
  const mapHeight = Number(
    store.state.mapDimensions.height.slice(
      0,
      store.state.mapDimensions.height.length - 2
    )
  )
  if (fullScreen.value) {
    if (currentHeight < mapHeight * 0.8) {
      closeScreen()
    } else {
      detailsContainerMaxHeight.value = store.state.mapDimensions.height
    }
  } else {
    if (currentHeight > mapHeight / 4) {
      detailsContainerMaxHeight.value = `calc(${store.state.mapDimensions.height})`
      detailsContainerBorderRadius.value = "0"
      fullScreen.value = true
    } else {
      detailsContainerMaxHeight.value = drawerConstants.bottomSheetNormalHeight
    }
  }
}

const closeScreen = () => {
  fullScreen.value = false
  addTemporaryTransition()
  detailsContainerBorderRadius.value = drawerConstants.bottomSheetBorderRadius
  detailsContainerMaxHeight.value = drawerConstants.bottomSheetNormalHeight
}

let timeout: number
const addTemporaryTransition = (transitionTime = 0.5) => {
  clearTimeout(timeout)
  detailsContainerTransition.value = transitionTime + "s"
  timeout = setTimeout(() => {
    detailsContainerTransition.value = "none"
  }, transitionTime * 1000)
}

const hideModal = () => {
  store.actions.markers.deselectAll()
}

const collapseSheet = () => {
  detailsContainerMaxHeight.value = drawerConstants.bottomSheetloadingHeight
}

const openSheet = () => {
  detailsContainerMaxHeight.value = drawerConstants.bottomSheetNormalHeight
}

watch(
  () => store.state.reverseLoading,
  (nv) => {
    addTemporaryTransition(0.2)
    if (nv) {
      collapseSheet()
    } else if (!fullScreen.value) {
      openSheet()
    }
  }
)

watch(
  () => store.state.selectedMarker,
  (nv) => {
    if (!nv) return
    addTemporaryTransition(0.4)
    collapseSheet()
    setTimeout(() => {
      openSheet()
    }, 200)
  }
)
</script>

<style scoped lang="scss">
.mobile-details-section {
  width: 100%;
  z-index: 1000000;
  bottom: 0;
  direction: rtl;
  background-color: white;
  border-radius: 1em 1em 0 0;
  &.fullScreen {
    border-radius: 0;
  }
  .curved-loading {
    width: 100%;
    border-radius: 1em 1em 0 0;
  }
  .close-icon {
    left: 1em;
    top: 1em;
    z-index: 2;
  }
  .drag-button {
    padding-bottom: 4em;
    padding-left: 1.5em;
    padding-right: 1.5em;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    box-sizing: border-box;
    & > span {
      background-color: #cecece;
      border-radius: 25px;
      height: 5px;
      width: 30px;
      margin: auto;
    }
  }
  .close-modal-button {
    top: calc(-2em - 20px);
    right: 1em;
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
