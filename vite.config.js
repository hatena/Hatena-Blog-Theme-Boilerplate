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
  plugins: [
    {
      name: "configure-server",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("access-control-allow-private-network", "true");
          next();
        });
      },
    },
  ],
});
