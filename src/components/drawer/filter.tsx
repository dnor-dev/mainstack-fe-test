import Drawer from ".";
import { VStack, HStack } from "../ui/stack";
import { Button } from "../ui/button";
import DateRange from "../ui/filters/date-range";
import TransactionType from "../ui/filters/transaction-type";
import TransactionStatus from "../ui/filters/transaction-status";

type Props = {
  open: boolean;
  onClose: () => void;
};

const times = [
  {
    label: "Today",
    value: "today",
  },
  {
    label: "Last 7 days",
    value: "last7",
  },
  {
    label: "This month",
    value: "last30",
  },
  {
    label: "Last 3 months",
    value: "last90",
  },
];

const Filter = ({ open, onClose }: Props) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <VStack className="w-[450px] h-full overflow-auto no-scrollbar bg-white rounded-[20px] py-5 space-y-5 relative">
        <HStack className="items-center justify-between px-5">
          <h2 className="text-primary font-bold text-2xl">Filter</h2>
          <Button
            size="icon"
            className="bg-inherit rounded-full shadow-none text-primary text-[32px] font-thin"
            onClick={onClose}
          >
            &times;
          </Button>
        </HStack>

        <HStack className="px-5 items-center space-x-3 w-full overflow-auto no-scrollbar">
          {times.map((time, index) => (
            <Button
              key={index}
              className="border border-[#EFF1F6] rounded-[100px] text-primary bg-inherit shadow-none text-sm font-semibold !px-4"
            >
              {time.label}
            </Button>
          ))}
        </HStack>

        <DateRange />

        <TransactionType />

        <TransactionStatus />

        <HStack className="bg-white space-x-3 px-5 w-full absolute bottom-5">
          <div className="w-full">
            <Button
              className="w-full bg-inherit text-primary font-semibold border border-[#EFF1F6] rounded-[100px] h-12"
              variant="ghost"
              onClick={onClose}
            >
              Clear
            </Button>
          </div>
          <div className="w-full">
            <Button className="font-semibold rounded-[100px] w-full h-12">
              Apply
            </Button>
          </div>
        </HStack>
      </VStack>
    </Drawer>
  );
};

export default Filter;
