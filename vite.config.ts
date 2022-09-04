import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path, { resolve } from "path"
import dts from "vite-plugin-dts"
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/Map.vue"),
      name: "Vue3NeshanMapOpenlayers",
      fileName: "Vue3-NeshanMap-Openlayers",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
