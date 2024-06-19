import React from "react";
import {
  Area,
  XAxis,
  YAxis,
  AreaChart,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface IProps {
  data: IStockDataView[];
  ticker: string;
}

function Chart({ data, ticker }: IProps) {
  return (
    <ResponsiveContainer>
      <AreaChart
        width={800}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis type="number" domain={["dataMin", "dataMax"]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={ticker}
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
