import { FC } from "react";
import { VStack, HStack } from "../../components/ui/stack";
import { Button } from "@/components/ui/button";
import TransStats from "@/components/ui/trans-stats";
import RevenueChart from "@/components/ui/revenue-chart";
import Transactions from "@/components/ui/transactions";
import { useQueries } from "@tanstack/react-query";
import { QueryKeys } from "@/lib/constants/keys";
import { getWallet } from "@/lib/api/wallet.api";
import { getTransactions } from "@/lib/api/transaction.api";
import LoadingSpinner from "@/components/ui/loading-spinner";

const Revenue: FC = () => {
  const [wallet, transactions] = useQueries({
    queries: [
      {
        queryKey: [QueryKeys.GET_WALLET],
        queryFn: () => getWallet(),
      },
      {
        queryKey: [QueryKeys.GET_TRANSACTIONS],
        queryFn: () => getTransactions(),
      },
    ],
  });

  const isLoading = wallet.isLoading || transactions.isLoading;

  return (
    <VStack className="container mx-auto mt-16 space-y-14">
      {isLoading && (
        <div className="w-full h-[60vh] flex justify-center items-center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && transactions.data && wallet.data && (
        <>
          <HStack className="justify-between">
            <VStack className="h-[400px]">
              <HStack className="space-x-16 items-end">
                <VStack className="space-y-4">
                  <p className="text-sm font-medium">Available Balance</p>
                  <p className="text-primary font-bold text-4xl leading-none">
                    USD {wallet.data.data.balance.toFixed(2).toLocaleString()}
                  </p>
                </VStack>
                <Button
                  className="font-semibold text-base h-[52px] w-[167px] rounded-[100px] relative bottom-2"
                  size="lg"
                >
                  Withdraw
                </Button>
              </HStack>
              <div className="w-[765.21px]">
                <RevenueChart transactions={transactions.data.data} />
              </div>
            </VStack>
            <VStack className="space-y-10 h-[400px]">
              <TransStats
                label="Ledger Balance"
                value={wallet.data.data.ledger_balance}
              />
              <TransStats
                label="Total Payout"
                value={wallet.data.data.total_payout}
              />
              <TransStats
                label="Total Revenue"
                value={wallet.data.data.total_revenue}
              />
              <TransStats
                label="Pending Payout"
                value={wallet.data.data.pending_payout}
              />
            </VStack>
          </HStack>

          <Transactions transactions={transactions.data.data} />
        </>
      )}
    </VStack>
  );
};

export default Revenue;
