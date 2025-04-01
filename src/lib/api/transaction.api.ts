import { Transaction } from "../types/transaction.type";
import { api } from "./api.config";

export const getTransactions = async () =>
  await api.get<Transaction[]>("/transactions");
