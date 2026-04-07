<div align="center">
  <h1>⚔️ AI Battle Arena</h1>
  <p><i>An ultimate battleground for Large Language Models to compete and evaluate responses.</i></p>

  <p>
    <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge" alt="Status">
    <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  </p>
</div>

---

# 🚀 2️⃣ PROJECT OVERVIEW

**AI Battle Arena** is a cutting-edge platform where various Large Language Models (LLMs) like Google Gemini, Cohere, and Mistral go head-to-head. It allows users to submit a single prompt and watch different AI models generate responses simultaneously, revealing which model gives the best, fastest, or most accurate answer.

**Why it exists:** As the AI ecosystem expands rapidly, developers and enthusiasts need a unified environment to compare AI models quickly without juggling multiple API accounts or tabs.

**Problem it solves:** It centralizes the AI evaluation process, providing an unbiased, side-by-side comparison of model capabilities, latency, and quality.

---

# 🎯 3️⃣ MVP (Minimum Viable Product)

### Core Features Implemented
- **Dual Authentication:** Secure traditional email/password registration and seamless Google OAuth login via Passport.js.
- **Model Duel Interface:** Users can submit a prompt and trigger LangChain-orchestrated calls to multiple AI providers simultaneously.
- **Result Comparison:** A side-by-side display of generated outputs for effortless qualitative evaluation.

### What Makes this Version Usable
Users can instantly sign up with Google, navigate the sleek glassmorphic UI, pick their preferred AI models, and begin testing prompts immediately without complex configuration setups. It's fully functional for evaluating real-world model outputs side-by-side.

---

# ⚙️ 4️⃣ HOW IT WORKS (DETAILED)

The application follows a modern client-server architecture with seamless AI integrations:

1. **User Input:** A user types a prompt into the React frontend and designates the AI models they wish to test.
2. **Frontend Request:** The Vite/React application sends a secure API request with JWT authentication credentials to the Node.js backend.
3. **Backend Processing:** The Express server validates the incoming request using express-validator and routes it to the designated AI controller.
4. **AI Orchestration:** The backend leverages LangChain to asynchronously and simultaneously dispatch the prompt to multiple AI provider APIs (e.g., Mistral, Cohere, Google AI).
5. **Response Aggregation:** The backend listens for and gathers the asynchronous responses from all triggered models.
6. **Result Display:** The aggregated payload is returned to the frontend, which renders the responses side-by-side using responsive Markdown components.

---

# 🧠 5️⃣ BACKEND ARCHITECTURE

The backend is built with **Node.js, Express, and TypeScript**, following a clean, modular structure.

- **Routes (`/api/v1/...`):** Defines the strict API endpoints for authentication (`user.routes.ts`) and AI operations (`ai.routes.ts`).
- **Controllers:** Handles incoming requests, extracts parameters, and formulates standard HTTP responses.
- **Services:** Contains the core business logic (e.g., integrating LangChain, generating tokens).
- **Middleware:** Intercepts requests for Authentication (JWT verification), and Request Validation.
- **Models:** Mongoose schemas defining the MongoDB database structure (e.g., handling optional passwords for Google OAuth users).
- **Auth:** Combines standard JWT strategy with the `passport-google-oauth20` strategy for flexible, secure logins.

**Request Lifecycle:**
`Client Request` ➡️ `Global Middleware` ➡️ `Auth/Validation Middleware` ➡️ `Controller` ➡️ `Service layer (LangChain/DB)` ➡️ `Controller` ➡️ `Client Response`

---

# 📁 6️⃣ PROJECT STRUCTURE

```bash
backend/
 ├── src/
 │   ├── config/          # Environment variables setup
 │   ├── controllers/     # Route logic endpoints
 │   ├── middlewares/     # Authentication & Validation checks
 │   ├── models/          # MongoDB Mongoose schemas
 │   ├── routes/          # Express route definitions
 │   ├── services/        # Application business logic
 │   ├── validator/       # Zod / Express request validators
 │   ├── app.ts           # Express app instance and middleware setup
 │   └── server.ts        # Server entry point & DB connection
 ├── dist/                # Compiled TypeScript code
 ├── public/              # Static file serving
 ├── package.json
 └── tsconfig.json

frontend/
 ├── src/
 │   ├── components/      # Reusable React components (UI/Glassmorphism)
 │   ├── pages/           # Page layouts (Login, Battle interface)
 │   ├── styles/          # Tailwind CSS configurations
 │   ├── App.jsx          # Main application router
 │   └── main.jsx         # React DOM rendering
 ├── public/
 ├── package.json
 └── vite.config.js
```

---

# 🛠️ 7️⃣ TECH STACK

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node JS" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/LangChain-121212?style=for-the-badge&logo=chainlink&logoColor=white" alt="LangChain" />
</div>

---

# 🔐 8️⃣ AUTHENTICATION

The application utilizes a robust dual-authentication system ensuring security and user convenience:
- **Traditional Login:** Secure email and password registration using `bcryptjs` for password hashing before database storage, and `jsonwebtoken` for secure session management.
- **Google OAuth:** A seamless "Continue with Google" popup flow powered by `passport-google-oauth20`. This handles users dynamically natively handling token exchanging and bypassing custom password creation.

Tokens are managed via HTTP-cookies alongside standard headers to protect against vulnerabilities.

---

# 🌐 9️⃣ API ENDPOINTS

### Auth Routes (`/api/v1/auth/...`)
- `POST /register`: Registers a new user with an email and password.
- `POST /login`: Authenticates an existing user and returns an access token.
- `GET /me`: Fetches the currently authenticated user's profile using the session token.
- `GET /google`: Initiates the Google OAuth 2.0 flow.
- `GET /google/callback`: Receives the OAuth callback, establishes session, and redirects to frontend.
- `POST /logout`: Invalidates the user session.

### AI Routes (`/api/v1/ai/...`)
- `POST /battle`: Accepts a text prompt and an array of target model identifiers. Requests parallel generation from LangChain services and returns unified responses.

---

# 🚀 🔟 DEPLOYMENT

The application is configured to be deployed on platforms like **Render**.

**General Guidelines:**
1. Connect your Git repository to the platform.
2. For the **Backend**, establish a Node.js Web Service.
3. Configure all sensitive Environment Variables (`.env`) secretly in the deployment dashboard.
4. **Backend Build Process:** `npm install && npm run build`
5. **Backend Start Command:** `npm start` (Runs `node dist/server.js`)
6. **Frontend Process:** Deploy as a Static Site using `npm run build` locally or automated pipeline.
7. **Deployed Link:** https://ai-battle-arena-bzxf.onrender.com


---

# ⚡ 1️⃣1️⃣ INSTALLATION GUIDE

Step-by-step instructions to get the application running locally:

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd project
```

### 2. Setup Database & Environment
- Configure a local MongoDB URI or a MongoDB Atlas cluster URI.
- Gather API Keys for Google (Gemini), Mistral, and Cohere.
- Gather Google OAuth Client ID and Secret from the Cloud Console.

### 3. Backend Setup
```bash
cd Backend
npm install

# Make sure to create a .env file with your variables
npm run build
npm start
```
*(Alternatively, run `npm run dev` for hot-watching with `tsx`)*

### 4. Frontend Setup
Open a new terminal window:
```bash
cd Frontend
npm install
npm run dev
```

The React app will be live at the indicated Vite localhost port.

---

# 🔮 1️⃣2️⃣ FUTURE IMPROVEMENTS

- **User Voting System:** Allow users to blindly vote on which generated output was best, creating community-ranked accuracy scores.
- **Conversation History:** Save past user prompts and side-by-side model outputs into a MongoDB collection for later review.
- **Deeper Integrations:** Connect additional LLM providers like Anthropic (Claude) and OpenAI (GPT-4).
- **Performance Metrics Display:** Show token-per-second generation capability and raw latency for each model per request.

---

# 🤝 1️⃣3️⃣ CONTRIBUTION

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


---
<div align="center">
  <p>Built by <b>Sounarva💙</b></p>
</div>
