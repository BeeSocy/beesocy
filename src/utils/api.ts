import axios from 'axios';
import { AUTH_TOKEN } from './secrets';

export const api = axios.create({
  baseURL: 'http://localhost:9090/api',
  headers: { Authorization: AUTH_TOKEN }
});
