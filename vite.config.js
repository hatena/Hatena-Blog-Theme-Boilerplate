import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  build: {
    rollupOptions: {
      input: ["scss/boilerplate.scss"],
      output: {
        assetFileNames: ({ name }) => name,
      },
    },
    outDir: "build",
    cssMinify: false,
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
