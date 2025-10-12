import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';



export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/Portfolio/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled', 'lucide-react'],
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  server: {
    host: true,
    port: 5173,
    // ... reste pareil
  },
  build: {
    assetsDir: 'assets',
    target: 'esnext',
    cssCodeSplit: true,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
          motion: ['framer-motion'],
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        format: 'es'
      },
    },
  },
}));