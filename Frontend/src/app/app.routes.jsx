import { createBrowserRouter, Navigate } from "react-router"
import HomeArena from "../features/ai/pages/HomeArena"
import Home from "../features/auth/pages/Home"

export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/arena",
        element: <HomeArena />
    },
    {
        path: "/battle-arena",
        element: <Navigate to="/arena" />
    }
])