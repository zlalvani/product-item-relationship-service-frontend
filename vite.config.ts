import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [checker({ typescript: true }), react()],
  define: {
    global: {},
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest-setup.js",
    coverage: {
      provider: 'istanbul' // or 'c8'
    },
  },
});
