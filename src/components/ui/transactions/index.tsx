import { VStack, HStack } from "../stack";
import { Button } from "../button";
import { ArrowDownToLine, ChevronDown } from "lucide-react";
import Withdrawal from "./withdrawal";
import Deposit from "./deposit";
import { useDisclosure } from "@/lib/hooks/useDisclosure";
import Filter from "@/components/drawer/filter";
import { Transaction, TransactionFilter } from "@/lib/types/transaction.type";
import NoMatchFilter from "./no-match-filter";
import { times } from "@/lib/constants/filter-data";
import { useEffect, useState } from "react";

type Props = {
  transactions: Transaction[];
  filterData: TransactionFilter;
  setFilterData: (filterData: TransactionFilter) => void;
  data: Transaction[];
  setData: (data: Transaction[]) => void;
};

const Transactions = ({
  transactions,
  filterData,
  setFilterData,
  data,
  setData,
}: Props) => {
  const [filterCount, setFilterCount] = useState(0);

  const { onOpen, onClose, open } = useDisclosure();

  const sortedData = [...data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const clearFilters = () => {
    setFilterData({
      dateRange: {
        from: undefined,
        to: undefined,
      },
      transactionType: [],
      transactionStatus: [],
      dateTime: "",
    });
    setData(transactions);
  };

  useEffect(() => {
    const count =
      (filterData.dateRange.from || filterData.dateRange.to ? 1 : 0) +
      (filterData.transactionType.length > 0 ? 1 : 0) +
      (filterData.transactionStatus.length > 0 ? 1 : 0) +
      (filterData.dateTime ? 1 : 0);

    setFilterCount(count);
  }, [filterData]);

  return (
    <VStack className="w-full space-y-8 pb-24">
      <HStack className="w-full items-center justify-between">
        <VStack>
          <h2 className="text-primary font-bold text-2xl">
            {data.length} Transactions
          </h2>
          <p className="text-sm font-medium leading-4">
            {filterData.dateTime
              ? `Your transactions for ${times
                  .find((time) => time.value === filterData.dateTime)
                  ?.label.toLowerCase()}`
              : "Your transactions for All Time"}
          </p>
        </VStack>
        <HStack className="space-x-3">
          <Button
            className="bg-[#EFF1F6] rounded-[100px] text-primary font-semibold !p-6"
            onClick={onOpen}
          >
            Filter
            {filterCount > 0 && (
              <span className="bg-primary text-white w-[20px] h-[20px] flex items-center justify-center text-xs font-medium rounded-full">
                {filterCount}
              </span>
            )}
            <ChevronDown />
          </Button>
          <Button className="bg-[#EFF1F6] rounded-[100px] text-primary font-semibold !p-6">
            Export list <ArrowDownToLine />
          </Button>
        </HStack>
      </HStack>

      <hr className="bg-[#EFF1F6]" />

      <VStack className="space-y-7">
        {sortedData.length > 0 &&
          sortedData.map((transaction) =>
            transaction.type === "deposit" ? (
              <Deposit
                key={transaction.payment_reference}
                transaction={transaction}
              />
            ) : (
              <Withdrawal
                key={transaction.payment_reference}
                transaction={transaction}
              />
            )
          )}
      </VStack>

      {data.length === 0 && <NoMatchFilter clearFilters={clearFilters} />}

      <Filter
        open={open}
        onClose={onClose}
        filter={filterData}
        setFilter={setFilterData}
        transactions={transactions}
        setTransactions={setData}
        clearFilters={clearFilters}
      />
    </VStack>
  );
};

export default Transactions;
