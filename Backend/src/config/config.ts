import { config } from "dotenv";
config()

type Env = {
    GEMINI_API_KEY: string,
    MISTRAL_API_KEY: string,
    COHERE_API_KEY: string
}

const env: Env = {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
    MISTRAL_API_KEY: process.env.MISTRAL_API_KEY || "",
    COHERE_API_KEY: process.env.COHERE_API_KEY || ""
}

export default env