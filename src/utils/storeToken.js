import axios from 'axios';
import Cookie from 'cookies-js';

const storeToken = () => {
  axios.interceptors.request.use((config) => {
    const token = Cookie.get('token');

    if (token) {
      config.headers['x-access-token'] = token;
      config.headers.post['Content-Type'] = 'application/json';
      config.headers.post['Access-Control-Allow-Origin'] = '*';
    }

    return config;
  }, err => (Promise.reject(err)));
};

export default storeToken;
