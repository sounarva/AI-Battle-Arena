import { ChatMistralAI } from "@langchain/mistralai";
// import { ChatGoogle} from "@langchain/google"
import { ChatCohere } from "@langchain/cohere";
import env from "../config/config.js";
// const gemini_model = new ChatGoogle({
//     model: "gemini-2.5-flash",
//     apiKey: env.GEMINI_API_KEY
// })
const mistral_model = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: env.MISTRAL_API_KEY
});
const cohere_model = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: env.COHERE_API_KEY
});
export { mistral_model, cohere_model };
//# sourceMappingURL=models.service.js.map