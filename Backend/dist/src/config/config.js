import { config } from "dotenv";
config();
const env = {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
    MISTRAL_API_KEY: process.env.MISTRAL_API_KEY || "",
    COHERE_API_KEY: process.env.COHERE_API_KEY || "",
    JWT_SECRET: process.env.JWT_SECRET || "",
    REDIS_HOST: process.env.REDIS_HOST || "",
    REDIS_PORT: process.env.REDIS_PORT || "",
    REDIS_PASSWORD: process.env.REDIS_PASSWORD || "",
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
    GOOGLE_CALLBACK_URI: process.env.GOOGLE_CALLBACK_URI || "http://localhost:3000/api/v1/auth/google/callback",
    FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173"
};
export default env;
//# sourceMappingURL=config.js.map