import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Utilise le fichier postcss.config.js
    devSourcemap: true, // Active les sourcemaps pour le développement
  },
  build: {
    sourcemap: true, // Active les sourcemaps pour le build
  },
});
