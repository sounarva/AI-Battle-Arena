import { Router, type Response } from "express";
import passport from "passport"
import {
    registerController,
    loginController,
    logoutController,
    getmeController,
    googleCallbackController
} from "../controllers/user.controller.js"
import authMiddleware from "../middlewares/auth.middleware.js";
import authValidator from "../validator/auth.validator.js";

const router = Router()

router.post("/register", authValidator, registerController)
router.post("/login", authValidator, loginController)
router.post("/logout", authMiddleware, logoutController)
router.get("/me", authMiddleware, getmeController)
router.get("/google",
    passport.authenticate("google", { scope: [ "profile", "email" ] })
)
router.get('/google/callback',
    passport.authenticate('google', {
        session: false,
        failureRedirect: '/'
    }),
    googleCallbackController
)


export default router