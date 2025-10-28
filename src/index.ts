import { configDotenv } from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { SendMessageImpl } from "./usecases/send-message.js";
configDotenv();

import { createLogger } from "winston";

const llm = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
});

const logger = createLogger();

const sendMessageUseCase = new SendMessageImpl(llm, logger);

const response = await sendMessageUseCase.send({
  message: "Hi, i'm nilton :D",
});

console.log(JSON.stringify(response, null, 2));
