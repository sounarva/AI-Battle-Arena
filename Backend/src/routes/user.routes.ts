import { Router } from "express";
import {
    registerController,
    loginController,
    logoutController,
    getmeController
} from "../controllers/user.controller.js"
import authMiddleware from "../middlewares/auth.middleware.js";
import authValidator from "../validator/auth.validator.js";

const router = Router()

router.post("/register", authValidator, registerController)
router.post("/login", authValidator, loginController)
router.post("/logout", authMiddleware, logoutController)
router.get("/me", authMiddleware, getmeController)

export default router