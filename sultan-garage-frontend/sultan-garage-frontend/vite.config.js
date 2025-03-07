import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve('src'),
      },
    },
    server: {
      proxy: {
        '/api' : {
          target:  'https://sultan-garage-production.up.railway.app', // Use environment variable for production
          changeOrigin: true,
          secure: false, // set to true in production if using HTTPS
        },
      },
    }
});

