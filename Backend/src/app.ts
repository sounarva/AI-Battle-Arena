import express from "express"
import morgan from "morgan"
import passport from 'passport';
import cookieParser from "cookie-parser"
import aiRoutes from "./routes/ai.routes.js"
import userRoutes from "./routes/user.routes.js"
import path from "path";
import { fileURLToPath } from "url";
// import cors from "cors"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import env from "./config/config.js"

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
passport.use(new GoogleStrategy({
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: env.GOOGLE_CALLBACK_URI
}, (_, __, profile, done) => {
    return done(null, profile);
}))
app.use(morgan("dev"))
app.use(cookieParser())
// app.use(cors({
//     origin: "*",
//     methods: ["GET", "POST"],
//     credentials: true
// }))
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/v1/ai", aiRoutes)
app.use("/api/v1/auth", userRoutes)

app.get("*", (req, res, next) => {
    if (req.originalUrl.startsWith("/api")) {
        return next();
    }

    res.sendFile(path.join(__dirname, "../public/index.html"));
});

export default app