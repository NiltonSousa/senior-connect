import type { IMessageRequest } from "@/interfaces/message-request.js";
import type { IMessageResponse } from "@/interfaces/message-response.js";
import type { ISendMessageUseCase } from "@/interfaces/usecases/send-message.js";
import type { MessageContent } from "@langchain/core/messages";
import type { ChatOpenAI } from "@langchain/openai";
import type { Logger } from "winston";

export class SendMessageImpl implements ISendMessageUseCase {
  constructor(
    private readonly llm: ChatOpenAI,
    private readonly logger: Logger
  ) {}

  async send(request: IMessageRequest): Promise<MessageContent> {
    try {
      const response = await this.llm.invoke([
        { role: "user", content: request.message },
      ]);

      if (!response.content) {
        throw new Error("Error when trying to get content");
      }

      return response.content;
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }
}
