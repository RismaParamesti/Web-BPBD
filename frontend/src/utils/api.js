import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.satudatabidangpk.com/api", // Ganti dengan URL backend Anda
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
