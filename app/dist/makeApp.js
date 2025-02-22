import path from "node:path";
import fastifyAutoload from "@fastify/autoload";
import fastify from "fastify";
function makeApp() {
  const app = fastify({
    logger: true
  });
  app.register(fastifyAutoload, {
    dir: path.resolve("./dist/plugins")
  });
  app.get("/healthz", async () => {
    return {
      ok: true
    };
  });
  return app;
}
export {
  makeApp
};
