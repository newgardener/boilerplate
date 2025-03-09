import path from "node:path";
import fastifyAutoload from "@fastify/autoload";
import fastify from "fastify";

export function makeApp() {
  // 앱을 생성
  const app = fastify({
    logger: true,
    pluginTimeout: 60000,
  });

  // 플러그인을 등록
  app.register(fastifyAutoload, {
    dir: path.resolve("./dist/plugins"),
  });

  // 헬스체크 엔드포인트를 등록
  app.get("/healthz", async () => {
    return {
      ok: true,
    };
  });

  return app;
}
