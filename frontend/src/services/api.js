import axios from 'axios';

const URL = 'http://localhost:3333';
// const URL = 'https://beheros.herokuapp.com';

const api = axios.create({
  baseURL: URL
})

export default api;