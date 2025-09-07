import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://renderdeploy-d5n0.onrender.com',
    // baseURL: 'http://localhost:4444',
    withCredentials: true
});

export default instance;
