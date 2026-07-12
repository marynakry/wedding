import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ru: resolve(__dirname, 'ru/index.html'),
        ua: resolve(__dirname, 'ua/index.html'),
        dressCodeInspo: resolve(__dirname, 'dress-code-inspo/index.html'),
        dressCodeLady: resolve(__dirname, 'dress-code-lady/index.html'),
        dressCodeGentleman: resolve(__dirname, 'dress-code-gentleman/index.html')
      }
    }
  }
})
