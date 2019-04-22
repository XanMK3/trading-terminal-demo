import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.iextrading.com/1.0/',
});

export default instance;
