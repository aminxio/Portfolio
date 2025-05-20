import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use environment variable for base URL, defaulting to GitHub Pages path in production
const base = process.env.CUSTOM_DOMAIN ? '/' : '/Portfolio/';

export default defineConfig({
  base,
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled'],
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

    // 🔽 Log incoming requests
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        next();
      });
    },
  },
});
