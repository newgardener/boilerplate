import type { FastifyInstance } from "fastify/types/instance";
import type { FastifyRequest } from "fastify/types/request";

export interface Context {
  app: FastifyInstance;
  req: FastifyRequest;
}
