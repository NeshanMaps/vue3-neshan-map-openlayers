<template>
  <div class="page">
    <div id="search-form">
      <label>
        <input type="checkbox" name="activate-search" v-model="autoSearch" @keydown.enter="search" />
        :جستجو با کلیک روی نقشه
      </label>
      <br />
      <label class="justify-between">
        <input dir="rtl" type="search" name="search" v-model="searchText" @keydown.enter="search" />
        :متن جستجو
      </label>
      <br />
      <label class="justify-between">
        <input type="text" name="coords" v-model="coords" />
        :مختصات جستجو
      </label>
      <br />
      <button @click="search">جستجو</button>
    </div>
    <Map
      ref="map"
      mapKey="web.ApsMGWLRNZ6JAsKIKfVjhTfX5ojUSeSdk7kVuavm"
      serviceKey="service.iEBKgNGr3yicBeQgKhFKB187X3df2vFmqpOLM5GD"
      :center="{ latitude: 36.311559, longitude: 59.5870851 }"
      @click="handleClick"
      poi
      traffic
    />
  </div>
</template>

<script>
import Map from "@/components/Map.vue";

export default {
  name: "HomeView",
  components: {
    Map,
  },
  data() {
    return {
      searchText: null,
      autoSearch: false,
      coords: null,
    };
  },
  methods: {
    handleClick(event) {
      this.coords = event.stdPoint;
      if (this.autoSearch) {
        this.search();
      }
    },
    search({ coords = this.coords, text = this.searchText } = {}) {
      this.$refs.map.search({ text, coords });
    },
  },
};
</script>

<style>
.page {
  height: 100%;
}
#search-form {
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
.justify-between {
  display: flex;
  justify-content: space-between;
}
</style>
