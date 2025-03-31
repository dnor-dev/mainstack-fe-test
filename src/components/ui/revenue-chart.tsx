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

const data = [
  { date: "Apr 1, 2022", value: 4 },
  { date: "Apr 5, 2022", value: 30 },
  { date: "Apr 10, 2022", value: 10 },
  { date: "Apr 15, 2022", value: 40 },
  { date: "Apr 20, 2022", value: 20 },
  { date: "Apr 25, 2022", value: 50 },
  { date: "Apr 30, 2022", value: 5 },
];

const RevenueChart: FC = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            tick={{ fontSize: 14, fill: "#56616B", fontWeight: 500 }}
            tickFormatter={(_) => ""}
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
        <p className="text-sm text-[#56616B] font-medium">{data[0].date}</p>
        <p className="text-sm text-[#56616B] font-medium">
          {data[data.length - 1].date}
        </p>
      </HStack>
    </>
  );
};

export default RevenueChart;
