import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    componentTagger()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: Number(process.env.PORT) || 5173,
    strictPort: false,
    open: false,
    hmr: false, // Disable HMR - rely on server restarts instead
    watch: {
      // Still watch files for compilation
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
