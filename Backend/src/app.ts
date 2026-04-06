import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import aiRoutes from "./routes/ai.routes.js"
import userRoutes from "./routes/user.routes.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}))

app.use("/api/v1/ai", aiRoutes)
app.use("/api/v1/auth", userRoutes)

export default app