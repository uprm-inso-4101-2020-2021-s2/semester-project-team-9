import axios from 'axios';

import { api } from "../config/config";

const Http = axios.create({
  baseURL: api,
});

export default Http;
