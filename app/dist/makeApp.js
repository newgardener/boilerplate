import fastify from "fastify";
function makeApp() {
  const app = fastify();
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
