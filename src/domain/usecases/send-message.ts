import type { IMessageRequest } from "../messages/message-request.js";
import type { IMessageResponse } from "../messages/message-response.js";

export interface ISendMessageUseCase {
  send(message: IMessageRequest): Promise<IMessageResponse>;
}
