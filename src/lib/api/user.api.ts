import { User } from "../types/user.type";
import { api } from "./api.config";

export const getUser = async () => await api.get<User>("/user");
