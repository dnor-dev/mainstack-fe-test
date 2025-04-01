import { HStack, VStack } from "../stack";
import CreditIcon from "../../../assets/images/credit.svg";

const CreditTransaction = () => {
  return (
    <HStack className="items-center justify-between w-full">
      <HStack className="space-x-3.5 items-center">
        <HStack className="bg-[#E3FCF2] w-[48px] h-[48px] rounded-full items-center justify-center">
          <img src={CreditIcon} alt="credit" />
        </HStack>
        <VStack className="space-y-1.5">
          <h5 className="text-primary font-medium">Psychology of Money</h5>
          <p className="font-medium text-sm">Roy Cash</p>
        </VStack>
      </HStack>

      <VStack className="items-end">
        <h5 className="text-primary font-bold">USD 600</h5>
        <p className="font-medium text-sm">Apr 03,2022</p>
      </VStack>
    </HStack>
  );
};

export default CreditTransaction;
