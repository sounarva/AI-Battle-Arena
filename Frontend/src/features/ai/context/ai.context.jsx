import { createContext, useState } from "react";

export const AIContext = createContext()

export const AIProvider = ({ children }) => {
    const [result, setResult] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    return (
        <AIContext.Provider value={{ result, isLoading, error, setResult, setIsLoading, setError }}>
            {children}
        </AIContext.Provider>
    )
} 