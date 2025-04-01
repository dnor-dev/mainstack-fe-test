import { api } from "./api.config";

export const getWallet = async () => await api.get("/wallet");
