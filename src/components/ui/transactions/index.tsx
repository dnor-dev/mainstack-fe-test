import { VStack, HStack } from "../stack";
import { Button } from "../button";
import { ArrowDownToLine, ChevronDown } from "lucide-react";
import Withdrawal from "./withdrawal";
import Deposit from "./deposit";
import { useDisclosure } from "@/lib/hooks/useDisclosure";
import Filter from "@/components/drawer/filter";
import { Transaction } from "@/lib/types/transaction.type";
import { useEffect, useState } from "react";

type Props = {
  transactions: Transaction[];
};

const Transactions = ({ transactions }: Props) => {
  const { onOpen, onClose, open } = useDisclosure();
  const [data, setData] = useState<Transaction[]>(
    transactions.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );

  useEffect(() => setData(transactions), [transactions]);

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
          <Button
            className="bg-[#EFF1F6] rounded-[100px] text-primary font-semibold !p-6"
            onClick={onOpen}
          >
            Filter <ChevronDown />
          </Button>
          <Button className="bg-[#EFF1F6] rounded-[100px] text-primary font-semibold !p-6">
            Export list <ArrowDownToLine />
          </Button>
        </HStack>
      </HStack>

      <hr className="bg-[#EFF1F6]" />

      <VStack className="space-y-7">
        {data.length > 0 &&
          data.map((transaction) =>
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

      <Filter open={open} onClose={onClose} />
    </VStack>
  );
};

export default Transactions;
