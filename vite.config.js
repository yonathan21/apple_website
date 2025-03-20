import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-0a5",
    project: "javascript-react"
  })],

  base:"/apple_website",

  build: {
    sourcemap: true
  }
})