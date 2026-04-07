import { RouterProvider } from "react-router";
import { appRoutes } from "./app.routes";
import useAuth from "../features/auth/hooks/useAuth";
import { useEffect } from "react";
import Toaster from "../features/auth/components/Toaster";

const App = () => {
    const { getMe } = useAuth()
    useEffect(() => {
        const getMeData = async () => {
            await getMe()
        }
        getMeData()
    }, [])
    return (
        <>
            <Toaster />
            <RouterProvider router={appRoutes} />
        </>
    )
};

export default App;