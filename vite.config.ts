import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import componentTagger from "@moatless/tagger/vite";
import inspector from "@moatless/inspector/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    componentTagger(),
    inspector()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 5173,
    strictPort: false,
    open: false,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
