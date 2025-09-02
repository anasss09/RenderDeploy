import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://deploy-first-vercel-uxxj.vercel.app/',
    // baseURL: 'http://localhost:4444',
    withCredentials: true
});

export default instance;