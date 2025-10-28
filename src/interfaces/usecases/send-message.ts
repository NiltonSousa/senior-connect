import type { MessageContent } from "@langchain/core/messages";
import type { IMessageRequest, IMessageResponse } from "../index.js";

export interface ISendMessageUseCase {
  send(message: IMessageRequest): Promise<MessageContent>;
}
