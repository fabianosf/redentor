import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
}

export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    headers: securityHeaders,
    allowedHosts: true,
    proxy: {
      '/media': {
        target: 'https://www.gruporedentor.com.br',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/media/, ''),
      },
    },
  },
  preview: {
    headers: securityHeaders,
    proxy: {
      '/media': {
        target: 'https://www.gruporedentor.com.br',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/media/, ''),
      },
    },
  },
})
