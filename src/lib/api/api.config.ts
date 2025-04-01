import axios from "axios";

const prodBaseUrl = "https://fe-task-api.mainstack.io";

export const api = axios.create({
  baseURL: prodBaseUrl,
  timeout: 60000,
});
