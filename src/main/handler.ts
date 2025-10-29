import type { IMessageRequest } from "@/domain/messages/message-request.js";
import type { FastifyReply, FastifyRequest } from "fastify";
import { createLogger } from "winston";
import { makeInvokeSendMessageController } from "./factories/index.js";

export default async function handler(
  request: FastifyRequest<{ Body: IMessageRequest }>,
  reply: FastifyReply
): Promise<void> {
  try {
    const logger = createLogger();

    const invokeSendMessageController = makeInvokeSendMessageController(logger);

    const response = await invokeSendMessageController.control(request.body);

    reply.status(200).send(response);
  } catch (error) {
    reply
      .status(500)
      .send({ message: (error as Error).message || "Internal server error" });
  }
}
