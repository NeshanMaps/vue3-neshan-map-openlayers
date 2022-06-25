<template>
  <li>
    {{ item?.title }}
  </li>
</template>
<script lang="ts">
import { defineProps, PropType } from "vue";
import { SearchItem } from "../Map.model";
export default {
  name: "ResultItem",
};
</script>
<script setup lang="ts">
defineProps({
  item: Object as PropType<SearchItem>,
});
</script>

<style lang="scss" scoped>
li {
  padding: 0.3rem;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    border: 1px solid rgb(119, 119, 186);
  }
}
</style>
