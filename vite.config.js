import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// vite.config.js
export default defineConfig({
  plugins: [vue()],
  base: '/myportfolio/', // This is the ONLY thing that fixes the 404
})
