import type {
  IController,
  IControllerContext,
  IMessageRequest,
  IMessageResponse,
  ISendMessageUseCase,
} from "@/domain/index.js";
import type { Logger } from "winston";

export class InvokeSendMessageController
  implements IController<IMessageRequest, IMessageResponse>
{
  constructor(
    private readonly logger: Logger,
    private readonly trackMessageUseCase: ISendMessageUseCase
  ) {}
  async control(
    input: IMessageRequest,
    ctx?: IControllerContext
  ): Promise<IMessageResponse> {
    this.logger.info("Initializing message control...", ctx);

    return this.trackMessageUseCase.send(input);
  }
}
