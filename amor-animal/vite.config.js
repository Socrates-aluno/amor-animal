import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(process.cwd(), 'index.html'),
        cadastro: resolve(process.cwd(), 'cadastro.html'),
        projeto: resolve(process.cwd(), 'projeto.html')
      }
    }
  }
})