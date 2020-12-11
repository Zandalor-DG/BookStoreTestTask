import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    headers: { 'Content-Type': 'application/json', 'x-access-token': '' },
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers['x-access-token'] = token;
    return config;
});

export default instance;
