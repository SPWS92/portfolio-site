import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@data': `${path.resolve(__dirname, './src/data/')}`,
      '@helpers': `${path.resolve(__dirname, './src/helpers/')}`,
      '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
      '@layouts': `${path.resolve(__dirname, './src/layouts/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`,
      '@test': `${path.resolve(__dirname, './src/testing/')}`,
    }
  }
})
