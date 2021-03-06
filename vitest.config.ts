/// <reference types="vitest" />
import { defineConfig } from 'vite';
import swc from 'rollup-plugin-swc';

export default defineConfig({
  test: {
    global: true,
  },
  plugins: [
    swc({
      jsc: {
        parser: {
          syntax: 'typescript',
          dynamicImport: true,
          decorators: true,
        },
        target: 'es2021',
        transform: {
          decoratorMetadata: true,
        },
      },
    }),
  ],
  esbuild: false,
});
