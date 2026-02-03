import { defineConfig } from 'vite'
import { stdlib } from './dist/index'

export default defineConfig({
  root: 'examples',
  plugins: [
    stdlib(),
  ],
  build: {
    minify: false,
  },
})
