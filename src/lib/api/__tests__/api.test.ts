import { describe, test, expect, vi } from "vitest";
import { Transaction } from "../../types/transaction.type";
import { getTransactions } from "../transaction.api";
import { getUser } from "../user.api";
import { api } from "../api.config";
import { User } from "../../types/user.type";
import { Wallet } from "../../types/wallet.type";
import { getWallet } from "../wallet.api";

vi.mock("../api.config");

const mockTransactions: Transaction[] = [
  {
    amount: 100,
    payment_reference: "ref1",
    date: "2025-03-30T10:00:00Z",
    metadata: {
      name: "John Doe",
      type: "deposit",
      email: "john@example.com",
      quantity: 1,
      country: "USA",
      product_name: "Product A",
    },
    type: "deposit",
    status: "successful",
  },
  {
    amount: 200,
    payment_reference: "ref2",
    date: "2025-03-29T12:00:00Z",
    metadata: {
      name: "Jane Doe",
      type: "withdrawal",
      email: "jane@example.com",
      quantity: 2,
      country: "Canada",
      product_name: "Product B",
    },
    type: "withdrawal",
    status: "pending",
  },
];

const mockUser: User = {
  email: "john@example.com",
  first_name: "John",
  last_name: "Doe",
};

const mockWallet: Wallet = {
  balance: 100,
  ledger_balance: 100,
  pending_payout: 100,
  total_payout: 200,
  total_revenue: 1000,
};

describe("API", () => {
  test("get transactions", async () => {
    vi.spyOn(api, "get").mockResolvedValue(mockTransactions);

    const transactions = await getTransactions();

    expect(api.get).toHaveBeenCalledWith("/transactions");
    expect(transactions).toEqual(mockTransactions);
  });

  test("get user details", async () => {
    vi.spyOn(api, "get").mockResolvedValue(mockUser);

    const user = await getUser();

    expect(api.get).toHaveBeenCalledWith("/user");
    expect(user).toEqual(mockUser);
  });

  test("get user wallet details", async () => {
    vi.spyOn(api, "get").mockResolvedValue(mockWallet);

    const wallet = await getWallet();

    expect(api.get).toHaveBeenCalledWith("/wallet");
    expect(wallet).toEqual(mockWallet);
  });

  test("should handle API errors", async () => {
    const mockError = new Error("API Error");

    vi.spyOn(api, "get").mockRejectedValue(mockError);

    await expect(getTransactions()).rejects.toThrow(mockError);
  });
});
