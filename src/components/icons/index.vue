<template>
  <MagnetIcon v-if="name === 'magnet'" :size="size"></MagnetIcon>
  <CloseIcon v-else-if="name === 'close'" :size="size"></CloseIcon>
  <NeighbourhoodIcon
    v-else-if="name === 'neighbourhood'"
    :size="size"
  ></NeighbourhoodIcon>
</template>

<script lang="ts">
import MagnetIcon from "./Magnet.icon.vue";
import CloseIcon from "./Close.icon.vue";
import NeighbourhoodIcon from "./Neighbourhood.icon.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "IconIndex",
  components: {
    MagnetIcon,
    CloseIcon,
    NeighbourhoodIcon,
  },
  props: {
    name: String,
    size: Number,
  },
});
</script>
