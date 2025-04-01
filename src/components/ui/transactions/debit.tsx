import { HStack, VStack } from "../stack";
import DebitIcon from "../../../assets/images/debit.svg";

const DebitTransaction = () => {
  return (
    <HStack className="items-center justify-between w-full">
      <HStack className="space-x-3.5 items-center">
        <HStack className="bg-[#F9E3E0] w-[48px] h-[48px] rounded-full items-center justify-center">
          <img src={DebitIcon} alt="debit" />
        </HStack>
        <VStack className="space-y-1">
          <h5 className="text-primary font-medium">Cash Withdrawal</h5>
          <p className="text-[#0EA163] font-medium text-sm">Successful</p>
        </VStack>
      </HStack>

      <VStack className="items-end">
        <h5 className="text-primary font-bold">USD 600</h5>
        <p className="font-medium text-sm">Apr 03,2022</p>
      </VStack>
    </HStack>
  );
};

export default DebitTransaction;
