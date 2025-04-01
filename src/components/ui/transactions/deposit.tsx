import { HStack, VStack } from "../stack";
import CreditIcon from "../../../assets/images/credit.svg";
import { Transaction } from "@/lib/types/transaction.type";
import { format } from "date-fns";

type Props = {
  transaction: Transaction;
};

const Deposit = ({ transaction }: Props) => {
  return (
    <HStack className="items-center justify-between w-full">
      <HStack className="space-x-3.5 items-center">
        <HStack className="bg-[#E3FCF2] w-[48px] h-[48px] rounded-full items-center justify-center">
          <img src={CreditIcon} alt="credit" />
        </HStack>
        <VStack className="space-y-1.5">
          <h5 className="text-primary font-medium">
            {transaction.metadata.product_name ?? transaction.metadata.type}
          </h5>
          <p className="font-medium text-sm">{transaction.metadata.name}</p>
        </VStack>
      </HStack>

      <VStack className="items-end">
        <h5 className="text-primary font-bold">
          USD {transaction.amount.toFixed(2).toLocaleString()}
        </h5>
        <p className="font-medium text-sm">
          {format(new Date(transaction.date), "MMM dd,yyyy")}
        </p>
      </VStack>
    </HStack>
  );
};

export default Deposit;
