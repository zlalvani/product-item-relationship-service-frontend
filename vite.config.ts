import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import inject from '@rollup/plugin-inject';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [checker({ typescript: true }), react()],
  server: {
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest-setup.js",
    coverage: {
      include: ["src/**"],
      exclude: ["src/generated/**"],
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
