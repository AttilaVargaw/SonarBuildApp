import { resolve } from "path";

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
      name: "sonar-build-app",
      // the proper extensions will be added
      fileName: "sonar-build-app",
    },
  },
});
