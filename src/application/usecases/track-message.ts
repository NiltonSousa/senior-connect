import type { IMessageRequest } from "@/domain/messages/message-request.js";
import type { IMessageResponse } from "@/domain/messages/message-response.js";
import type { ISendMessageUseCase } from "@/domain/usecases/send-message.js";
import type { ChatOpenAI } from "@langchain/openai";
import type { Logger } from "winston";

export class TrackMessageUseCase implements ISendMessageUseCase {
  constructor(
    private readonly llm: ChatOpenAI,
    private readonly logger: Logger
  ) {}

  async send(request: IMessageRequest): Promise<IMessageResponse> {
    try {
      const response = await this.llm.invoke([
        { role: "user", content: request.message },
      ]);

      if (!response.content) {
        throw new Error("Error when trying to get content");
      }

      return { content: response.content as string };
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }
}
