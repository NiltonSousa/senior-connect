import { TrackMessageUseCase } from "@/application/usecases/track-message.js";
import { llm } from "@/main/external/openai.js";
import type { Logger } from "winston";

export function makeTrackMessageUseCase(logger: Logger): TrackMessageUseCase {
  return new TrackMessageUseCase(llm, logger);
}
