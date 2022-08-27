<template>
  <div class="page">
    <div class="mymap">
      <Map
        ref="map"
        mapKey="web.ApsMGWLRNZ6JAsKIKfVjhTfX5ojUSeSdk7kVuavm"
        serviceKey="service.iEBKgNGr3yicBeQgKhFKB187X3df2vFmqpOLM5GD"
        :center="{ latitude: 36.311559, longitude: 59.5870851 }"
        @on-click="handleClick"
        poi
        traffic
      />
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import Map from "../../dist/NeshanMap.umd.js";
import Map from "@/components/Map.vue"

import { defineComponent } from "vue"
export default defineComponent({
  name: "HomeView",
  components: {
    Map,
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
/* @import url('../../dist/NeshanMap.css'); */
@import url("@/assets/test.scss");

.page {
  height: 100%;
}
.map-search-form {
  padding: 1rem;
  position: absolute;
  z-index: 2;
  background-color: white;
  border: 1px solid rgb(116, 116, 116);
  min-width: 300px;
  max-width: 50vw;
  top: 4vh;
  left: 4vw;
}

.mymap {
  margin-top: 100px;
  height: 500px;
  border: 1px solid;
  box-sizing: border-box;
  /* font-size: 0.8rem; */
}
</style>
