import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router'
import PreLoader from '../../../components/PreLoader'

const Protected = ({ children }) => {
    const { user, loading } = useAuth()
    if (loading) {
        return <PreLoader onComplete={() => { }} />
    }
    if (!user) {
        return <Navigate to="/" replace />
    }
    return (
        children
    )
}

export default Protected