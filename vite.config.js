// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'postcss',
      postcssOptions: {
        plugins: [
          require('postcss-modules')(),
          require('postcss-px-to-viewport')({
            viewportWidth: 1920,
            viewportHeight: 1080,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore', '.hairlines', '.button'],
            minPixelValue: 1,
            mediaQuery: false,
          }),
        ],
      },
    },
  ],
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
