<template>
  <div class="page">
    <NeshanMap
      ref="map"
      mapKey="web.ApsMGWLRNZ6JAsKIKfVjhTfX5ojUSeSdk7kVuavm"
      serviceKey="service.iEBKgNGr3yicBeQgKhFKB187X3df2vFmqpOLM5GD"
      :center="{ latitude: 35.69672648316882, longitude: 51.36281969540723 }"
      :zoom="19"
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
      searchText: "",
      autoSearch: false,
      coords: null,
    }
  },
  methods: {
    handleClick(event: any) {
      this.coords = event.stdPoint
      if (this.autoSearch) {
        this.search()
      }
    },
    search({ coords, text }: { coords?: any; text?: any } = {}) {
      coords ||= this.coords
      text ||= this.searchText
      ;(this.$refs.map as any).search({ text, coords })
    },
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
