import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base:'https://moralesmortales.github.io/professional',
  resolve: {
    alias: {
      '@': '/src',  
    },
  },
});
