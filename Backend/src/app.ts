import express from "express"
import morgan from "morgan"
import aiRoutes from "./routes/ai.routes.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}))

app.use("/api/v1/ai", aiRoutes)

export default app