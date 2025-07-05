import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Hard-coding base to '/' since we're using a custom domain
const base = '/';

export default defineConfig({
  base,
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled', 'lucide-react'],
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['amazingmoaaz.online'],
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' https: data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com; connect-src 'self' https://api.web3forms.com;",
    },
    fs: {
      strict: false,
    },
  },
  build: {
    assetsDir: 'assets',
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
          motion: ['framer-motion'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
