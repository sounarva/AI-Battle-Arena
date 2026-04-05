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
            setError(error?.message)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        result,
        isLoading,
        error,
        handleBattle
    }
}