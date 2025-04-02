import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { HStack } from "./stack";
import { Transaction } from "@/lib/types/transaction.type";

type Props = {
  transactions: Transaction[];
};

const RevenueChart: FC<Props> = ({ transactions }) => {
  let data = transactions
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((transaction) => ({
      date: transaction.date,
      value: transaction.amount,
    }));

  if (data.length === 0) {
    data = [
      { date: "N/A", value: -0.1 },
      { date: "N/A", value: -0.1 },
    ];
  }

  return (
    <>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            tick={{ fontSize: 14, fill: "#56616B", fontWeight: 500 }}
            tickFormatter={() => ""}
            axisLine={{ stroke: "#DBDEE5" }}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FF5403"
            strokeWidth={1}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <HStack className="items-center justify-between space-x-16 relative -top-5">
        <p className="text-sm text-[#56616B] font-medium">{data[0]?.date}</p>
        <p className="text-sm text-[#56616B] font-medium">
          {data[data?.length - 1]?.date}
        </p>
      </HStack>
    </>
  );
};

export default RevenueChart;
