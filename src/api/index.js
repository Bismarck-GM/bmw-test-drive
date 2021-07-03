import Axios from 'axios';

export * from './endpoints';

const api = Axios.create({
  baseURL: 'https://bmw-test-drive.herokuapp.com/api/v1/',
  headers: {
    Accept: 'application/json',
  },
});

export const saveUserToLocal = (userData) => {
  window.localStorage.setItem('user', JSON.stringify(userData));
};

export const getUserFromLocal = () => JSON.parse(window.localStorage.getItem('user'));

export const setBearerToken = () => {
  const user = JSON.parse(window.localStorage.getItem('user'));
  if (user) {
    api.defaults.headers.common.Authorization = `Bearer ${user.token}`;
  } else {
    api.defaults.headers.common.Authorization = 'Bearer ';
  }
};

setBearerToken();

export default api;
