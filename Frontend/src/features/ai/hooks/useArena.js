import { useContext } from "react";
import { AIContext } from "../context/ai.context";
import battleApi from "../services/battle.api";

export const useArena = () => {
    const { result, isLoading, error, setResult, setIsLoading, setError } = useContext(AIContext)

    const handleBattle = async (query) => {
        try {
            setIsLoading(true)
            setError(null)
            const response = await battleApi(query)
            setResult(response?.result)
        } catch (error) {
            const serverMessage = error?.response?.data?.message || error?.message
            console.error("Battle error:", serverMessage)
            setError(serverMessage)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        result,
        setResult,
        isLoading,
        error,
        handleBattle
    }
}