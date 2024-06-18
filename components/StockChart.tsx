"use client";
import React, { useEffect, useState } from "react";
import TimelineSelector from "./TimelineSelector";
import { ONE_DAY } from "@/consts/general.consts";
import Chart from "./Chart";
import { convertDataToChartFormat } from "@/scripts/convertDataToChartFormat";
import { fetchStockDataClient } from "@/scripts/fetchStockDataClient";

function StockChart() {
  const [stockData, setStockData] = useState<IStockData>();
  const [selectedTime, setSelectedTime] = useState(ONE_DAY);

  console.log("@@@@@st@@ockData", stockData);

  const fetchStockData = async (time) => {
    setSelectedTime(time);
    const data = await fetchStockDataClient({ time });
    const chartFormat = convertDataToChartFormat(data);
    setStockData(chartFormat);
  };

  useEffect(() => {
    fetchStockData(selectedTime);
  }, []);

  return (
    <div>
      {Array.isArray(stockData) ? <Chart data={stockData} /> : "loading?"}
      <TimelineSelector fetchStockData={fetchStockData} selectedTime={selectedTime} />
    </div>
  );
}

export default StockChart;
