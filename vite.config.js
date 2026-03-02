import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // This forces the Request URL to become https://jannvega102.github.io/-/src/main.js
  base: '/-/', 
  build: {
    outDir: 'dist',
  }
})
