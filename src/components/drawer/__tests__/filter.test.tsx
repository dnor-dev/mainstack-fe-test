import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, vi, it } from "vitest";
import { Transaction, TransactionFilter } from "@/lib/types/transaction.type";
import Filter from "../filter";

const mockTransactions: Transaction[] = [
  {
    amount: 100,
    payment_reference: "ref123",
    date: "2025-03-31T10:00:00Z",
    metadata: {
      name: "John Doe",
      type: "purchase",
      email: "johndoe@example.com",
      quantity: 1,
      country: "USA",
      product_name: "Product A",
    },
    type: "deposit",
    status: "successful",
  },
  {
    amount: 50,
    payment_reference: "ref456",
    date: "2025-03-30T12:00:00Z",
    metadata: {
      name: "Jane Doe",
      type: "subscription",
      email: "janedoe@example.com",
      quantity: 1,
      country: "UK",
      product_name: "Product B",
    },
    type: "withdrawal",
    status: "pending",
  },
];

const mockFilter: TransactionFilter = {
  dateRange: {
    from: undefined,
    to: undefined,
  },
  transactionType: [],
  transactionStatus: [],
  dateTime: "",
};

describe("Filter", () => {
  it("should render correctly", () => {
    render(
      <Filter
        open={true}
        onClose={vi.fn()}
        filter={mockFilter}
        setFilter={vi.fn()}
        transactions={mockTransactions}
        setTransactions={vi.fn()}
        clearFilters={vi.fn()}
      />
    );
    expect(screen.getByText("Filter")).toBeInTheDocument();
  });

  it("should close when the close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <Filter
        open={true}
        onClose={onClose}
        filter={mockFilter}
        setFilter={vi.fn()}
        transactions={mockTransactions}
        setTransactions={vi.fn()}
        clearFilters={vi.fn()}
      />
    );
    fireEvent.click(screen.getByText("×"));
    expect(onClose).toHaveBeenCalled();
  });

  it("should apply filters when 'Apply' button is clicked", () => {
    const setTransactions = vi.fn();
    render(
      <Filter
        open={true}
        onClose={vi.fn()}
        filter={mockFilter}
        setFilter={vi.fn()}
        transactions={mockTransactions}
        setTransactions={setTransactions}
        clearFilters={vi.fn()}
      />
    );
    fireEvent.click(screen.getByText("Apply"));
    expect(setTransactions).toHaveBeenCalled();
  });

  it("should clear filters when 'Clear' button is clicked", () => {
    const clearFilters = vi.fn();
    render(
      <Filter
        open={true}
        onClose={vi.fn()}
        filter={mockFilter}
        setFilter={vi.fn()}
        transactions={mockTransactions}
        setTransactions={vi.fn()}
        clearFilters={clearFilters}
      />
    );
    fireEvent.click(screen.getByText("Clear"));
    expect(clearFilters).toHaveBeenCalled();
  });
});
