import { Router } from "express";
import { battleController } from "../controllers/ai.controller.js";
// import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router()

router.post("/battle", battleController)

export default router