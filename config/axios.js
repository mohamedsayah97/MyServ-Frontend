import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
    });