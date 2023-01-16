import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import inject from '@rollup/plugin-inject';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [checker({ typescript: true }), react()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest-setup.js",
    coverage: {
      include: ["src/**"],
      provider: 'istanbul', // or 'c8'
      reporter: ['text', 'json', 'html'],
    },
  },
  build: {
    rollupOptions: {
        plugins: [inject({ Buffer: ['Buffer', 'Buffer'] })],
    },
},
});
