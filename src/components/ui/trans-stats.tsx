import { Info } from "lucide-react";
import { VStack, HStack } from "./stack";

type Props = {
  label: string;
  value: number;
};

const TransStats = ({ label, value }: Props) => {
  return (
    <HStack className="items-start justify-between space-x-16">
      <VStack className="space-y-4">
        <p className="text-sm font-medium leading-none">{label}</p>
        <p className="text-primary font-bold text-[28px] leading-none">
          USD {value.toFixed(2).toLocaleString()}
        </p>
      </VStack>
      <Info size={15.83} className="text-[#888F95]" />
    </HStack>
  );
};

export default TransStats;
