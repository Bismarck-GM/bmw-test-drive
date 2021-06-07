import Axios from 'axios';

export * from './endpoints';

const api = Axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  headers: {
    Accept: 'application/json',
  },
});

export const setToken = () => {
  const user = JSON.parse(window.localStorage.getItem('user'));
  if (user) {
    api.defaults.headers.common.Authorization = `Bearer ${user.token}`;
  }
};

setToken();

export default api;
