import { VStack } from "../stack";
import NoMatchIcon from "../../../assets/images/no-match.svg";
import { Button } from "../button";

const NoMatchFilter = ({ clearFilters }: { clearFilters: () => void }) => {
  return (
    <VStack className="flex flex-col justify-center w-full h-full mx-auto max-w-[369px] space-y-6 pb-5">
      <VStack className="bg-[#F6F7F9] w-[48px] h-[48px] rounded-[16px] items-center justify-center">
        <img src={NoMatchIcon} alt="no-match" />
      </VStack>
      <VStack className="space-y-1.5">
        <h1 className="text-[28px] text-primary font-bold leading-[40px]">
          No matching transaction found for the selected filter
        </h1>
        <p className="font-medium leading-[24px]">
          Change your filters to see more results, or add a new product.
        </p>
      </VStack>
      <Button
        className="bg-[#EFF1F6] rounded-[100px] text-primary font-semibold !p-6 w-fit"
        onClick={clearFilters}
      >
        Clear Filter
      </Button>
    </VStack>
  );
};

export default NoMatchFilter;
