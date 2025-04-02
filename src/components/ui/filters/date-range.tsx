import { VStack, HStack } from "../stack";
import DatePicker from "../date-picker";
import { TransactionFilter } from "@/lib/types/transaction.type";

type Props = {
  filter: TransactionFilter;
  setFilter: (filter: TransactionFilter) => void;
};

const DateRange = ({ filter, setFilter }: Props) => {
  return (
    <VStack className="px-5 w-full space-y-2">
      <h3 className="text-primary font-semibold text-base">Date Range</h3>
      <HStack className="w-full space-x-3">
        <DatePicker
          date={filter.dateRange.from}
          setDate={(date) =>
            setFilter({
              ...filter,
              dateRange: { ...filter.dateRange, from: date },
            })
          }
        />
        <DatePicker
          date={filter.dateRange.to}
          setDate={(date) =>
            setFilter({
              ...filter,
              dateRange: { ...filter.dateRange, to: date },
            })
          }
        />
      </HStack>
    </VStack>
  );
};

export default DateRange;
