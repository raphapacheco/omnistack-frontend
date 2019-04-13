import axios from 'axios';
import { AST_Export } from 'terser';

const api = axios.create({
    baseURL: 'https://raphael-omnistack-backend.herokuapp.com'
});

export default api;