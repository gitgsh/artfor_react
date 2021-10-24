import axios from 'axios';

export const SERVER = 'http://10.89.3.131:8000';

export const KAKAO_LOGIN_API = `${SERVER}/kakao/login`;

const api = axios.create({
  baseURL: `${SERVER}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userApi = {
  signUp: (nickname, email, password) =>
    api.post('/user/join', {
      nickname,
      email,
      password,
    }),
  login: (email, password) =>
    api.post('/user/login', {
      email,
      password,
    }),
};

export const projectApi = {
  list: (offset, limit, category, status) =>
    api.get('/project', {
      params: {
        offset,
        limit,
        category,
        status,
      },
    }),
  category: () => api.get('/project/category'),
  status: () => api.get('/project/status'),
  detail: id => api.get(`/project/detail/${id}`),
};
