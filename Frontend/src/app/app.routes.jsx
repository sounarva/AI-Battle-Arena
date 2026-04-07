import { createBrowserRouter, Navigate } from "react-router"
import HomeArena from "../features/ai/pages/HomeArena"
import Home from "../features/auth/pages/Home"
import Register from "../features/auth/pages/Register"
import Login from "../features/auth/pages/Login"

export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/auth/register",
        element: <Register />
    },
    {
        path: "/auth/login",
        element: <Login />
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