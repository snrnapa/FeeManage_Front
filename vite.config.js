import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src/'),
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
});

