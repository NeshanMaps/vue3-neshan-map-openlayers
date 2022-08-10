<template>
  <div>
    <div class="list-item">
      <b class="text-lg">
        {{ item?.title }}
      </b>
      <div class="text-caption">
        {{ item?.neighbourhood }}
      </div>
    </div>
    <hr />
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType } from "vue"
import { SearchItem } from "../../Map.model"
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
