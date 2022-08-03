<template>
  <div ref="mobileResultViewContainer" class="mobile-details-section">
    <div :style="`height: ${store.state.mapDimensions.height}px;`">
      <div class="pos-relative">
        <CurvedLoading v-if="!fullScreen"></CurvedLoading>
        <Icon
          v-else
          name="close"
          :size="40"
          style="float: left"
          @click="closeScreen"
        ></Icon>
        <span
          class="dragButton d-block"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <span class="d-block" draggable />
        </span>
      </div>
      <Icon :name="iconName" :size="width"></Icon>
      <div class="px-2">
        <div v-if="item?.place" class="d-flex align-center">
          <Icon name="marker" :size="25" color="steelblue" class="px-1"></Icon>
          {{ item.place }}
        </div>
        <br />
        <div v-if="item?.formatted_address" class="d-flex align-center">
          <Icon
            name="secondary"
            :size="25"
            color="steelblue"
            class="px-1"
          ></Icon>
          {{ item.formatted_address }}
        </div>
        <br />
        <div v-if="item?.neighbourhood" class="d-flex align-center">
          <Icon
            name="neighborhood_landmark"
            :size="25"
            color="steelblue"
            class="px-1"
          ></Icon>
          محله {{ item.neighbourhood }}
        </div>
        <br />
        <div v-if="item?.city" class="d-flex align-center">
          <Icon name="city" :size="25" color="steelblue" class="px-1"></Icon>
          شهر {{ item.city }}
        </div>
        <br />
        <div v-if="item?.village" class="d-flex align-center">
          <Icon name="city" :size="25" color="steelblue" class="px-1"></Icon>
          روستای {{ item.village }}
        </div>
        <br />
        <div v-if="item?.neighbourhood" class="d-flex align-center">
          {{ item.in_odd_even_zone ? "داخل" : "خارج از" }}
          محدوده طرح زوج و فرد
        </div>
        <br />
        <div v-if="item?.neighbourhood" class="d-flex align-center">
          {{ item.in_traffic_zone ? "داخل" : "خارج از" }}
          محدوده طرح ترافیک
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType, ref } from "vue"
import { ReverseResult } from "./Map.model"
import { detailsSectionMixin } from "@/mixins"

import Icon from "@/components/icons/index.vue"
import CurvedLoading from "./CurvedLoading.vue"
import { store } from "@/store"

const props = defineProps({
  item: Object as PropType<ReverseResult | null>,
})

const mobileResultViewContainer = ref<HTMLDivElement>()
const fullScreen = ref(false)
const { iconName, width } = detailsSectionMixin({
  props,
  containerRef: mobileResultViewContainer,
})

const handleTouchMove = (evt: TouchEvent) => {
  const maxHeight =
    store.state.mapDimensions.height - Math.round(evt.targetTouches[0].clientY)
  mobileResultViewContainer.value?.style.setProperty(
    "max-height",
    `calc(${maxHeight}px + 1.5rem)`
  )
}

const handleTouchEnd = () => {
  if (!mobileResultViewContainer.value) return
  const maxHeight = window.getComputedStyle(
    mobileResultViewContainer.value
  ).maxHeight
  const maxHeightNumber = Number(maxHeight.slice(0, maxHeight.length - 2))
  if (fullScreen.value) {
    if (maxHeightNumber < store.state.mapDimensions.height * 0.8) {
      closeScreen()
    }
  } else {
    if (maxHeightNumber > store.state.mapDimensions.height / 4) {
      mobileResultViewContainer.value.style.setProperty(
        "max-height",
        store.state.mapDimensions.height + "px"
      )
      mobileResultViewContainer.value.style.setProperty("border-radius", "0")
      fullScreen.value = true
      addTemporaryTransition()
    } else if (maxHeightNumber < 70) {
      mobileResultViewContainer.value.style.setProperty("max-height", "70px")
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
  z-index: 4;
  background-color: white;
  bottom: 0;
  border-radius: 50% / 50px 50px 0 0;
  max-height: 5rem;
  overflow: hidden;
  direction: rtl;
  & > div {
    padding-top: 0.2rem;
    .dragButton {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      z-index: calc(999999 + 1); //More that neshan map watermark and title z-index
      position: absolute;
      top: 0;
      width: 50%;
      margin-left: 25%;
      margin-right: 25%;
      & > span {
        border-top: 1px solid black;
      }
    }
  }
}
</style>
