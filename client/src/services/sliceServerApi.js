import axios from 'axios';

const BASE_URL = "http://localhost:3000";

axios.defaults.baseURL = BASE_URL;

export async function getServerData() {
    const { data } = await axios.get("/api");
    return data;
};