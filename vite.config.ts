import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled'],},
  server: {
    host: true,  // Expose the server to the local network
    port: 5173,  // Optional: Specify a port (default is 5173)
  },
});
