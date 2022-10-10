<template>
  <div class="page">
    <NeshanMap
      ref="map"
      mapKey="web.ApsMGWLRNZ6JAsKIKfVjhTfX5ojUSeSdk7kVuavm"
      serviceKey="service.iEBKgNGr3yicBeQgKhFKB187X3df2vFmqpOLM5GD"
      :center="{ latitude: 35.69672648316882, longitude: 51.36281969540723 }"
      :markers-icon-callback="markersIconCallback"
    />
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import Map from "../../dist/Vue3-NeshanMap-Openlayers.mjs"
import { CreateMarkersPointsItem } from "@/components/Map.model";
import NeshanMap from "@/components/Map.vue"

import { defineComponent } from "vue"
export default defineComponent({
  name: "HomeView",
  components: {
    NeshanMap,
  },
  methods: {
    markersIconCallback(payload: CreateMarkersPointsItem) {
      if (payload.)
    }
  },
})
</script>

<style>
/* @import url("../../dist/style.css"); */
@import url("@/assets/test.scss");

.page {
  height: 100%;
}
</style>
