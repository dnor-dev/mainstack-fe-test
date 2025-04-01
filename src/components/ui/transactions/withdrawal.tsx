import { HStack, VStack } from "../stack";
import DebitIcon from "../../../assets/images/debit.svg";
import { Transaction } from "@/lib/types/transaction.type";
import { format } from "date-fns";

type Props = {
  transaction: Transaction;
};

const Withdrawal = ({ transaction }: Props) => {
  return (
    <HStack className="items-center justify-between w-full">
      <HStack className="space-x-3.5 items-center">
        <HStack className="bg-[#F9E3E0] w-[48px] h-[48px] rounded-full items-center justify-center">
          <img src={DebitIcon} alt="debit" />
        </HStack>
        <VStack className="space-y-1">
          <h5 className="text-primary font-medium">Cash Withdrawal</h5>
          {transaction.status === "successful" ? (
            <p className="text-[#0EA163] font-medium text-sm">Successful</p>
          ) : (
            <p className="text-[#A77A07] font-medium text-sm">Pending</p>
          )}
        </VStack>
      </HStack>

      <VStack className="items-end">
        <h5 className="text-primary font-bold">
          USD {transaction.amount.toFixed(2).toLocaleString()}
        </h5>
        <p className="font-medium text-sm">
          {" "}
          {format(new Date(transaction.date), "MMM dd,yyyy")}
        </p>
      </VStack>
    </HStack>
  );
};

export default Withdrawal;
