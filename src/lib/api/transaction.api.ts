import { api } from "./api.config";

export const getTransactions = async () => await api.get("/transactions");
