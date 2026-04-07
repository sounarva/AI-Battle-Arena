import axios from "axios"

const BASE_API_URL = axios.create({
    baseURL: "",
    withCredentials: true
})



const registerAPI = async ({ email, password }) => {
    const response = await BASE_API_URL.post("/api/v1/auth/register", { email, password })
    return response.data
}

const loginAPI = async ({ email, password}) => {
    const response = await BASE_API_URL.post("/api/v1/auth/login", { email, password })
    return response.data
}

const getmeAPI = async () => {
    const response = await BASE_API_URL.get("/api/v1/auth/me")
    return response.data
}

const logoutAPI = async () => {
    const response = await BASE_API_URL.post("/api/v1/auth/logout")
    return response.data
}

export { registerAPI, loginAPI, getmeAPI, logoutAPI }
