import { FC } from "react";
import { VStack, HStack } from "../../ui/stack";
import { Button } from "@/components/ui/button";
import TransStats from "@/components/ui/trans-stats";
import RevenueChart from "@/components/ui/revenue-chart";

const Revenue: FC = () => {
  return (
    <VStack className="container mx-auto mt-16">
      <HStack className="space-x-20 justify-center">
        <VStack className="h-[400px]">
          <HStack className="space-x-16 items-end">
            <VStack className="space-y-4">
              <p className="text-sm font-medium">Available Balance</p>
              <p className="text-primary font-bold text-4xl leading-none">
                USD 120,500.00
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
            <RevenueChart />
          </div>
        </VStack>

        <VStack className="space-y-10 h-[400px] pl-32">
          <TransStats label="Ledger Balance" value={0} />
          <TransStats label="Total Payout" value={55080} />
          <TransStats label="Total Revenue" value={175580} />
          <TransStats label="Pending Payout" value={0} />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Revenue;
