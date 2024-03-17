import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png'],
  optimizeDeps: {
    exclude: ['date-fns']
  },
  resolve: {
    alias: {
      'shared': path.resolve(__dirname, './src/shared'),
      'assets/*': path.resolve(__dirname, './src/assets'),
      'src/*': path.resolve(__dirname, './src/*'),
      'components': path.resolve(__dirname, './src/components'),
    },
  }
})
