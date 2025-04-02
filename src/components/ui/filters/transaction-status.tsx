import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../button";
import { ChevronDown } from "lucide-react";
import { VStack } from "../stack";
import { cn } from "@/lib/utils";
import { TransactionFilter } from "@/lib/types/transaction.type";

const options = ["Successful", "Pending", "Failed"];

type Props = {
  filter: TransactionFilter;
  setFilter: (filter: TransactionFilter) => void;
};

const TransactionStatus = ({ filter, setFilter }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleSelection = (value: string) => {
    setFilter({
      ...filter,
      transactionStatus: filter.transactionStatus.includes(value)
        ? filter.transactionStatus.filter((item) => item !== value)
        : [...filter.transactionStatus, value],
    });
  };

  return (
    <VStack className="w-full max-w-md space-y-2 px-5">
      <label className="text-black font-semibold">Transaction Status</label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "w-full !text-left justify-between text-sm font-medium shadow-none !text-primary border-2 border-[#EFF1F6] bg-[#EFF1F6] hover:text-primary hover:bg-inherit !py-6 rounded-[12px]",
              open && "border-primary bg-white"
            )}
            onClick={() => setOpen(!open)}
          >
            {filter.transactionStatus.length > 0
              ? filter.transactionStatus.join(", ")
              : "Select status"}
            <ChevronDown
              className="h-4 w-4 transition ease-in-out"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-full min-w-[var(--radix-popper-anchor-width)] bg-white shadow-md rounded-lg p-4 space-y-5"
          align="start"
        >
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <Checkbox
                checked={filter.transactionStatus.includes(option)}
                onCheckedChange={() => toggleSelection(option)}
              />
              <span className="text-primary font-semibold text-base">
                {option}
              </span>
            </label>
          ))}
        </PopoverContent>
      </Popover>
    </VStack>
  );
};

export default TransactionStatus;
