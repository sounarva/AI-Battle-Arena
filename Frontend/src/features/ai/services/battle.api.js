import axios from "axios";
const BASE_API = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

const battleApi = async (query) =>{
    const response = await BASE_API.post("/use-graph", {
        query
    })
    return response.data
}

export default battleApi