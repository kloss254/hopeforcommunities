import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/hopeforcommunities/", // MUST match your repo name
  server: {
    port: 3000,
    open: true
  }
})

