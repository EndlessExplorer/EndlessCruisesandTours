import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss')(),
        require('autoprefixer')(),
      ],
    },
    devSourcemap: true, // Active les sourcemaps pour voir le fichier traité
  },
  build: {
    sourcemap: true, // Génère des sourcemaps pour le build
  },
});
