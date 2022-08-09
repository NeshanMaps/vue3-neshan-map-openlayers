<template>
  <div>
    <div class="list-item">
      <b>
        {{ item?.title }}
      </b>
      <br />
      {{ item?.neighbourhood }}
    </div>
    <hr />
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { SearchItem } from '../../Map.model'
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
  font-size: smaller;
  b {
    font-size: 0.9rem;
  }
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
