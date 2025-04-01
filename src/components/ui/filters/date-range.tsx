import { VStack, HStack } from "../stack";
import { useState } from "react";
import DatePicker from "../date-picker";

const DateRange = () => {
  const [dateRange1, setDateRange1] = useState(new Date());
  const [dateRange2, setDateRange2] = useState(new Date());

  return (
    <VStack className="px-5 w-full space-y-2">
      <h3 className="text-primary font-semibold text-base">Date Range</h3>
      <HStack className="w-full space-x-3">
        {/* First date range */}
        <DatePicker date={dateRange1} setDate={setDateRange1} />
        <DatePicker date={dateRange2} setDate={setDateRange2} />
      </HStack>
    </VStack>
  );
};

export default DateRange;
