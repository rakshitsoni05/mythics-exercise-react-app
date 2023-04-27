import axios from "axios";
import APP_URL from "../constants";

const api = axios;

const API_BASE = APP_URL.node_server;

export const adminLogin = async (admin) => {
    const response = await api.post(`${API_BASE}/admin/login`, admin)
    console.log("res" , response.data)
    return response.data
}

export const getAllFormsInfo = async () => {
    const response = await api.get(`${API_BASE}/getAllInfo`)
    return response.data
}