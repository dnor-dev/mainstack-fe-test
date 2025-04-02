import Drawer from ".";
import { VStack, HStack } from "../ui/stack";
import { Button } from "../ui/button";
import DateRange from "../ui/filters/date-range";
import TransactionType from "../ui/filters/transaction-type";
import TransactionStatus from "../ui/filters/transaction-status";
import { times } from "@/lib/constants/filter-data";
import { Transaction, TransactionFilter } from "@/lib/types/transaction.type";
import { filterTransactions } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
  filter: TransactionFilter;
  setFilter: (filter: TransactionFilter) => void;
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
  clearFilters: () => void;
};

const Filter = ({
  open,
  onClose,
  filter,
  setFilter,
  transactions,
  setTransactions,
  clearFilters,
}: Props) => {
  const applyFilter = () => {
    setTransactions(filterTransactions(transactions, filter));
    onClose();
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <VStack className="w-[450px] h-full overflow-auto no-scrollbar bg-white rounded-[20px] py-5 space-y-5 relative">
        <HStack className="items-center justify-between px-5">
          <h2 className="text-primary font-bold text-2xl">Filter</h2>
          <Button
            size="icon"
            className="rounded-full shadow-none text-primary bg-inherit text-[32px] font-thin"
            onClick={onClose}
          >
            &times;
          </Button>
        </HStack>

        <HStack className="px-5 items-center space-x-3 w-full overflow-auto no-scrollbar">
          {times.map((time, index) => (
            <Button
              key={index}
              className={`border border-[#EFF1F6] rounded-[100px] ${
                filter.dateTime === time.value
                  ? "bg-primary text-white"
                  : "bg-inherit text-primary"
              } shadow-none text-sm font-semibold !px-4`}
              onClick={() => setFilter({ ...filter, dateTime: time.value })}
            >
              {time.label}
            </Button>
          ))}
        </HStack>

        <DateRange filter={filter} setFilter={setFilter} />

        <TransactionType filter={filter} setFilter={setFilter} />

        <TransactionStatus filter={filter} setFilter={setFilter} />

        <HStack className="bg-white space-x-3 px-5 w-full absolute bottom-5">
          <div className="w-full">
            <Button
              className="w-full bg-inherit text-primary font-semibold border border-[#EFF1F6] rounded-[100px] h-12"
              variant="ghost"
              onClick={clearFilters}
            >
              Clear
            </Button>
          </div>
          <div className="w-full">
            <Button
              className="font-semibold rounded-[100px] w-full h-12"
              onClick={applyFilter}
            >
              Apply
            </Button>
          </div>
        </HStack>
      </VStack>
    </Drawer>
  );
};

export default Filter;
