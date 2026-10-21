import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.GH_PAGES ? '/Portfolio/' : '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true
  }
})
