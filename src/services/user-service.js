import axios from "axios";
import APP_URL from "../constants";

const api = axios;

const API_BASE = APP_URL.node_server;


export const createUserInfo = async (user) => {
    const response = await api.post(`${API_BASE}/userInfo`, user)
    return response.data;
}