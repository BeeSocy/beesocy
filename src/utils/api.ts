import axios from 'axios';
import { AUTH_TOKEN } from './secrets';

export const baseURL = 'http://localhost:9090/api';

export const api = axios.create({
  baseURL,
  headers: { Authorization: AUTH_TOKEN }
});
