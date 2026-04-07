import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import {
    registerAPI,
    loginAPI,
    logoutAPI,
    getmeAPI
} from "../services/auth.api.js"

const useAuth = () => {
    const { user, setUser, loading, setLoading, error, setError } = useContext(AuthContext)



    const register = async ({ email, password }) => {
        try {
            setLoading(true)
            setError(null)
            const data = await registerAPI({ email, password })
            console.log(data.user)
            setUser(data?.user)
            return data?.user
        } catch (error) {
            console.log(error.response.data.message)
            setError(error.response.data.message)
            return null
        } finally {
            setLoading(false)
        }
    }

    const login = async ({ email, password }) => {
        try {
            setLoading(true)
            setError(null)
            const data = await loginAPI({ email, password })
            console.log(data.user)
            setUser(data?.user)
            return data?.user
        } catch (error) {
            console.log(error.response.data.message)
            setError(error.response.data.message)
            return null
        } finally {
            setLoading(false)
        }
    }

    const getMe = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await getmeAPI()
            console.log(data.user)
            setUser(data?.user)
        } catch (error) {
            console.log(error?.response?.data?.message)
        } finally {
            setLoading(false)       
        }
    }

    const logout = async () => {
        try {
            setLoading(true)
            setError(null)
            await logoutAPI()
            setUser(null)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        user,
        loading,
        error,
        setError,
        register,
        login,
        getMe,
        logout
    }
}

export default useAuth