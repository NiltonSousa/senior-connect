import { InvokeSendMessageController } from "@/main/controllers/invoke-send-message.js";
import type { Logger } from "winston";
import { makeTrackMessageUseCase } from "../usecases/track-message.js";

export function makeInvokeSendMessageController(
  logger: Logger
): InvokeSendMessageController {
  const trackMessageUseCase = makeTrackMessageUseCase(logger);

  return new InvokeSendMessageController(logger, trackMessageUseCase);
}
