import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Transaction, TransactionFilter } from "./types/transaction.type";
import { times } from "./constants/filter-data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filterTransactions = (
  transactions: Transaction[],
  filterData: TransactionFilter
): Transaction[] => {
  const { dateRange, transactionType, transactionStatus, dateTime } =
    filterData;

  return transactions
    .filter((transaction) => {
      const transactionDate = new Date(transaction.date);

      if (dateRange.from && dateRange.to) {
        const fromDate = new Date(dateRange.from);
        const toDate = new Date(dateRange.to);
        if (transactionDate < fromDate || transactionDate > toDate)
          return false;
      }

      const selectedTime = times.find((time) => time.value === dateTime);
      if (selectedTime) {
        const { from, to } = selectedTime.dateRange;
        if (transactionDate < new Date(from) || transactionDate > new Date(to))
          return false;
      }

      if (
        transactionType.length > 0 &&
        !transactionType
          .map((type) => type.toLowerCase())
          .includes(transaction?.type)
      ) {
        return false;
      }

      if (
        transactionStatus.length > 0 &&
        !transactionStatus
          .map((status) => status.toLowerCase())
          .includes(transaction.status)
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
