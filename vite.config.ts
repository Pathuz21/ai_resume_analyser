// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ai_resume_analyser/', // <- This is the repo name
  plugins: [react()],
})
