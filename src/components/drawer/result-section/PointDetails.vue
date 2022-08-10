<template>
  <div ref="pointDetailsContainer">
    <Icon :name="iconName" :size="width"></Icon>
    <div class="px-2">
      <div v-if="formattedItem?.place" class="d-flex align-center">
        <Icon name="marker" :size="25" color="steelblue" class="px-1"></Icon>
        {{ formattedItem.place }}
      </div>
      <br />
      <div v-if="formattedItem?.address" class="d-flex align-center">
        <Icon name="secondary" :size="25" color="steelblue" class="px-1"></Icon>
        {{ formattedItem.address }}
      </div>
      <br />
      <div v-if="formattedItem?.neighbourhood" class="d-flex align-center">
        <Icon
          name="neighborhood_landmark"
          :size="25"
          color="steelblue"
          class="px-1"
        ></Icon>
        {{ formattedItem.neighbourhood }}
      </div>
      <br />
      <div v-if="formattedItem?.region" class="d-flex align-center">
        <Icon name="city" :size="25" color="steelblue" class="px-1"></Icon>
        {{ formattedItem.region }}
      </div>
      <br />
      <div v-if="formattedItem?.in_odd_even_zone" class="d-flex align-center">
        {{ formattedItem.in_odd_even_zone ? "داخل" : "خارج از" }}
        محدوده طرح زوج و فرد
      </div>
      <br />
      <div v-if="formattedItem?.in_traffic_zone" class="d-flex align-center">
        {{ formattedItem.in_traffic_zone ? "داخل" : "خارج از" }}
        محدوده طرح ترافیک
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, PropType } from "vue"
import { detailsSectionMixin } from "@/mixins"
import { SelectedMarker } from "@/store/state.model"
import Icon from "@/components/icons/IconComponent.vue"

const props = defineProps({
  item: Object as PropType<SelectedMarker>,
})

const pointDetailsContainer = ref<HTMLDivElement>()
const { iconName, width, formattedItem } = detailsSectionMixin({
  props,
  containerRef: pointDetailsContainer,
})
</script>

<style></style>
