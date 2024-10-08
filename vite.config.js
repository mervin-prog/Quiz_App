import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/Quiz_App/',
   build: {
    outDir: 'build' // Output build files to 'build' directory
  }
})
