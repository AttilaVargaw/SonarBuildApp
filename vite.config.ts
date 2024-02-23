import { resolve } from "path";

import nodePolyfills from "rollup-plugin-polyfill-node";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import createExternal from "vite-plugin-external";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    createExternal({
      externals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/main.tsx"),
      // the proper extensions will be added
      fileName: "sonar-build-app",
      formats: ["es"],
    },
    rollupOptions: {
      plugins: [
        nodePolyfills({
          include: null,
        }),
      ],
    },
  },
});
