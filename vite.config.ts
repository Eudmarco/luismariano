import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // O segredo para evitar a tela branca
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
