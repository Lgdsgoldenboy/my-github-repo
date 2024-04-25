import { defineConfig } from "vite";
// import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  plugins: [react(), svgr()],
  server: {
    port: 4000,
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      // include: [/linked-dep/, /node_modules/],
    },
  },
});
