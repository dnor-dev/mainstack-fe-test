import { api } from "./api.config";

export const getUser = async () => await api.get("/user");
