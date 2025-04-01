import { VStack, HStack } from "../stack";
import { Button } from "../button";
import { ArrowDownToLine, ChevronDown } from "lucide-react";
import DebitTransaction from "./debit";
import CreditTransaction from "./credit";

const Transactions = () => {
  return (
    <VStack className="w-full space-y-8 pb-10">
      <HStack className="w-full items-center justify-between">
        <VStack>
          <h2 className="text-primary font-bold text-2xl">24 Transactions</h2>
          <p className="text-sm font-medium leading-4">
            Your transactions for the last 7 days
          </p>
        </VStack>
        <HStack className="space-x-3">
          <Button className="bg-[#EFF1F6] rounded-[100px] text-primary font-semibold !p-6">
            Filter <ChevronDown />
          </Button>
          <Button className="bg-[#EFF1F6] rounded-[100px] text-primary font-semibold !p-6">
            Export list <ArrowDownToLine />
          </Button>
        </HStack>
      </HStack>

      <hr className="bg-[#EFF1F6]" />

      <VStack className="space-y-7">
        <DebitTransaction />
        {[...Array(5)].map((_, index) => (
          <CreditTransaction key={index} />
        ))}
      </VStack>
    </VStack>
  );
};

export default Transactions;
