import { createBrowserRouter, Navigate } from "react-router"
import Home from "../features/ai/pages/Home"

export const appRoutes = createBrowserRouter([
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/",
        element: <Navigate to="/home" />
    }
])