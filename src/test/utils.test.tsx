import { describe, test, expect } from "vitest";
import { filterTransactions } from "@/lib/utils";
import { Transaction, TransactionFilter } from "@/lib/types/transaction.type";

const last90Days = new Date(new Date().setDate(new Date().getDate() - 90))
  .toISOString()
  .split("T")[0];

const sampleTransactions: Transaction[] = [
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
    date: last90Days + "T16:00:00Z",
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

describe("Filter Transactions", () => {
  test("returns all transactions when no filters are applied", () => {
    const filter: TransactionFilter = {
      dateRange: { from: undefined, to: undefined },
      transactionType: [],
      transactionStatus: [],
      dateTime: "",
    };

    const result = filterTransactions(sampleTransactions, filter);
    expect(result).toEqual(sampleTransactions);
  });

  test("filter by transaction type", () => {
    const filter: TransactionFilter = {
      dateRange: { from: undefined, to: undefined },
      transactionType: ["deposit"],
      transactionStatus: [],
      dateTime: "",
    };

    const result = filterTransactions(sampleTransactions, filter);
    expect(result).toHaveLength(1);
    expect(result[0].type).toBe("deposit");
  });

  test("filter by transaction status", () => {
    const filter: TransactionFilter = {
      dateRange: { from: undefined, to: undefined },
      transactionType: [],
      transactionStatus: ["pending"],
      dateTime: "",
    };

    const result = filterTransactions(sampleTransactions, filter);
    expect(result).toHaveLength(1);
    expect(result[0].status).toBe("pending");
  });

  test("filter by date range", () => {
    const filter: TransactionFilter = {
      dateRange: {
        from: new Date(Date.UTC(2025, 2, 30, 0, 0, 0)),
        to: new Date(Date.UTC(2025, 2, 30, 23, 59, 59)),
      },
      transactionType: [],
      transactionStatus: [],
      dateTime: "",
    };

    const result = filterTransactions(sampleTransactions, filter);
    expect(result).toHaveLength(1);
    expect(new Date(result[0].date)).toEqual(
      new Date("2025-03-30T10:00:00.000Z")
    );
  });

  test("filter by dateTime 'last90'", () => {
    const filter: TransactionFilter = {
      dateRange: { from: undefined, to: undefined },
      transactionType: [],
      transactionStatus: [],
      dateTime: "last90",
    };
    const result = filterTransactions(sampleTransactions, filter);
    expect(result).toHaveLength(2);
    expect(new Date(result[1].date).toISOString().split("T")[0]).toBe(
      last90Days
    );
  });
});
