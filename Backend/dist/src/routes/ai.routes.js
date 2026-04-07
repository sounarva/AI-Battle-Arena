import { Router } from "express";
import { battleController } from "../controllers/ai.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
const router = Router();
router.post("/battle", authMiddleware, battleController);
export default router;
//# sourceMappingURL=ai.routes.js.map