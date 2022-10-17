<template>
  <div class="page">
    <NeshanMap
      ref="map"
      :mapKey="mapKey"
      :serviceKey="serviceKey"
      :center="{ latitude: 35.69672648316882, longitude: 51.36281969540723 }"
      :zoom="12"
    />
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import Map from "../../dist/Vue3-NeshanMap-Openlayers.mjs"
import NeshanMap from "@/components/Map.vue"

import { defineComponent } from "vue"
export default defineComponent({
  name: "HomeView",
  components: {
    NeshanMap,
  },
  data() {
    return {
      mapKey: import.meta.env.VITE_MAP_KEY,
      serviceKey: import.meta.env.VITE_SERVICE_KEY
    }
  }
})
</script>

<style>
/* @import url("../../dist/style.css"); */
@import url("@/assets/test.scss");

.page {
  height: 100%;
}
</style>
