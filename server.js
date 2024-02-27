import { createServer } from "vite";

const blogHost = process.argv[2];
if (!blogHost) {
  throw new Error("ブログのドメイン名を指定してください");
}

const server = await createServer({
  server: {
    cors: {
      origin: `https://${blogHost}`,
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

await server.listen();
