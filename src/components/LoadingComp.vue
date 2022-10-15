<template>
  <div class="container" :dense="dense">
    <div class="loadings"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
defineProps({
  color: {
    type: String,
    default: "blue",
  },
  dense: Boolean,
})
</script>

<style lang="scss" scoped>
.container {
  background-color: #b3e5fc;
  height: 4px;
  overflow: hidden;
  width: 100%;
  &[dense="true"] {
    height: 2px;
  }
}

.loadings {
  height: 100%;
  position: relative;
  width: 100%;
}

.loadings::before {
  animation: subject 1.5s ease-out infinite;
  background-color: #03a9f4;
  content: "";
  height: 100%;
  position: absolute;
}

.loadings::after {
  animation: follower 1.5s ease-in infinite;
  background-color: #4fc3f7;
  content: "";
  height: 100%;
  position: absolute;
}

@keyframes subject {
  0% {
    left: -100%;
    width: 100%;
  }

  to {
    left: 100%;
    width: 10%;
  }
}

@keyframes follower {
  0% {
    left: -150%;
    width: 100%;
  }

  to {
    left: 100%;
    width: 10%;
  }
}
</style>
