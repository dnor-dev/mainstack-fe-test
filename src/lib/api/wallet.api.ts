import { Wallet } from "../types/wallet.type";
import { api } from "./api.config";

export const getWallet = async () => await api.get<Wallet>("/wallet");
