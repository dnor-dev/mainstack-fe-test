import { useCallback, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ChevronDown } from "lucide-react";
import { Calendar } from "./calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const DatePicker = ({
  date,
  setDate,
}: {
  date: Date | undefined;
  setDate: (date: Date) => void;
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = useCallback(
    (selectedDate: Date | undefined) => {
      if (selectedDate) {
        setDate(selectedDate);
        setOpen(false); // Close after selecting
      }
    },
    [setDate]
  );

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "w-full text-left text-sm font-medium shadow-none !text-primary border-2 border-[#EFF1F6] bg-[#EFF1F6] hover:text-primary hover:bg-inherit !py-6 rounded-[12px]",
              !date && "text-muted-foreground",
              open && "border-primary bg-white"
            )}
            onClick={() => setOpen((prev) => !prev)}
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <ChevronDown
              className="ml-auto h-4 w-4 text-[#31373D] transition-transform duration-200 ease-in-out"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" side="bottom" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            disabled={(date: Date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
