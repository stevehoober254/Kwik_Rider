import axios from 'axios';
import Config from '../assets/staticData/config.json';

const API = axios.create({
  baseURL: Config.ApiBaseUrl
});

axios.interceptors.request.use(
  config => {
    config.headers.common['Content-Type'] = 'application/json';

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default API;
