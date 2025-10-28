import type { FastifyInstance, FastifyRegisterOptions } from "fastify";
import sendMessageHandler from "./handler.js";

export default async function routes(fastify: FastifyInstance) {
  fastify.post("/message", sendMessageHandler);
}
