import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

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
      all: true,
      provider: 'istanbul', // or 'c8'
      reporter: ['text', 'json', 'html'],
    },
  },
});
