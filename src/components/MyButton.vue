<template>
  <button @click="onClick!">{{ label }}</button>
</template>
<script setup lang="ts">
import { defineProps, PropType } from "vue"
import  { MyButtonOptions } from "./MyButton.type"

defineProps({
  label: String,
  onClick: Function as PropType<() => void>,
  opt: Object as PropType<MyButtonOptions>,
})
</script>
