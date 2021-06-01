import Axios from 'axios';

export * from './endpoints';

const user = JSON.parse(window.localStorage.getItem('user'));

const api = Axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  headers: {
    Accept: 'application/json',
  },
});

api.defaults.headers.common.Authorization = `Bearer ${user ? user.token : ''}`;

export default api;
