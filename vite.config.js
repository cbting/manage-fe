import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: 'localhost',
    port: 8081,
    // proxy:
  },
  plugins: [vue()],
})
