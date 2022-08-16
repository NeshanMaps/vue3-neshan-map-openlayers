<template>
  <div>
    <div v-if="item" class="list-item">
      <b class="text-lg">
        {{ item.title }}
      </b>
      <div class="text-caption">
        {{
          item.region
            ?.split("،")
            .map((reg) => " " + reg.trim())
            .reverse()
            .join("،")
        }}،
        {{ item.address?.split("-").join("،") }}
        {{ item.neighbourhood ? `(${item.neighbourhood})` : "" }}
      </div>
    </div>
    <hr />
  </div>
</template>
<script setup lang="ts">
import { SearchItem } from "../../../store/markers/markers.model"
import { defineProps, PropType } from "vue"
defineProps({
  item: Object as PropType<SearchItem>,
})
</script>

<style lang="scss" scoped>
.list-item {
  padding: 1rem;
  border-radius: 0.3rem;
  text-align: start;
  cursor: pointer;
  &:hover {
    background-color: #ecf5fc;
  }
}
hr {
  margin: 0 1rem;
  border-width: 0.01rem;
  border-color: rgb(255, 255, 255);
}
</style>
