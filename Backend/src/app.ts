import express from "express"
import { invokeGraph } from "./services/graph.service.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}))

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome to AI Battle Arena"
    })
})

app.post("/use-graph", async (req, res) => {
    const { query } = req.body
    if (!query) {
        return res.status(400).json({
            message: "Query is required"
        })
    }
    const result = await invokeGraph(query)
    return res.status(200).json({
        success: true,
        message: "Graph invoked successfully 📊",
        result
    })
})

export default app