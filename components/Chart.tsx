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
  const interval =
    Array.isArray(data) && data.length > 10 ? Math.floor(data.length / 10) : 0;

  return (
    <ResponsiveContainer>
      <AreaChart width={800} height={250} data={data}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" interval={interval} />
        <YAxis
          type="number"
          domain={["dataMin", "dataMax"]}
          allowDecimals={false}
        />
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
