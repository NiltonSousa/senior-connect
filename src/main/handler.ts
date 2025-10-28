import type { IMessageRequest } from "@/interfaces/message-request.js";
import { SendMessageImpl } from "@/usecases/send-message.js";
import { ChatOpenAI } from "@langchain/openai";
import type { FastifyReply, FastifyRequest } from "fastify";
import { createLogger } from "winston";

export default async function handler(
  request: FastifyRequest<{ Body: IMessageRequest }>,
  reply: FastifyReply
): Promise<void> {
  try {
    const llm = new ChatOpenAI({
      model: "gpt-4o-mini",
      temperature: 0,
    });

    const logger = createLogger();

    const sendMessageUseCase = new SendMessageImpl(llm, logger);

    const response = await sendMessageUseCase.send(request.body);

    reply.status(200).send(response);
  } catch (error) {
    reply
      .status(500)
      .send({ message: (error as Error).message || "Internal server error" });
  }
}
