import axios from "axios";

const api = axios.create({
    baseURL: "http://198.74.50.215:3000"
})

export default api