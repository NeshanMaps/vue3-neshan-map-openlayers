<template>
  <div ref="resultViewContainer">
    <Icon :name="iconName" :size="width"></Icon>
    <div class="px-2">
      <div v-if="item?.place" class="d-flex align-center">
        <Icon name="marker" :size="25" color="steelblue" class="px-1"></Icon>
        {{ item.place }}
      </div>
      <br />
      <div v-if="item?.formatted_address" class="d-flex align-center">
        <Icon name="secondary" :size="25" color="steelblue" class="px-1"></Icon>
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
</template>
<script setup lang="ts">
import { computed, defineProps, onMounted, PropType, ref, watch } from "vue"
import Icon from "@/components/icons/index.vue"
import { ReverseResult } from "../../Map.model"
import { inlineSvgs } from "@/static"

const props = defineProps({
  item: Object as PropType<ReverseResult>,
})

const resultViewContainer = ref<HTMLDivElement>()
const width = ref(0)

const iconName = computed(() => {
  const name =
    props.item?.route_type &&
    Object.keys(inlineSvgs).includes(props.item?.route_type)
      ? props.item.route_type
      : props.item?.place
      ? "local_government_office"
      : "primary"
  return name
})

watch(
  () => resultViewContainer.value?.clientWidth,
  (nv) => {
    if (nv) width.value = nv
  }
)
onMounted(() => {
  const initialWidth = resultViewContainer.value?.clientWidth
  if (initialWidth) width.value = initialWidth
})
</script>
