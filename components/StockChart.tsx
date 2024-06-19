"use client";
import React, { useContext, useEffect, useState } from "react";
import TimelineSelector from "./TimelineSelector";
import { ERROR, LOADING, READY } from "@/consts/general.consts";
import Chart from "./Chart";
import { convertDataToChartFormat } from "@/scripts/convertDataToChartFormat";
import { fetchStockDataClient } from "@/scripts/fetchStockDataClient";
import { BeatLoader } from "react-spinners";
import { CacheContext } from "@/Context/CacheContext";

function StockChart() {
  const [status, setStatus] = useState<Status>(LOADING);

  const { ticker, stockCache, updateStockCache, selectedTime, changeTime } =
    useContext(CacheContext);

  const stockData: IStockDataView[] = stockCache[selectedTime];

  const fetchStockData = async (time: TimePeriod) => {
    changeTime(time);

    if (stockCache[time]) {
      setStatus(READY);
      return;
    }

    setStatus(LOADING);

    const stockData = await fetchStockDataClient({ ticker, time });

    if (Array.isArray(stockData)) {
      const chartData = convertDataToChartFormat(ticker, stockData, time);
      updateStockCache(time, chartData);
      setStatus(READY);
    } else {
      setStatus(ERROR);
    }
  };

  useEffect(() => {
    fetchStockData(selectedTime);
  }, [selectedTime]);

  return (
    <div>
      <div className="h-[250px] p-2">
        {status === LOADING ? (
          <div className="flex justify-center items-center h-full">
            <BeatLoader color={"#36d7b7"} />
          </div>
        ) : status === READY ? (
          <Chart data={stockData} ticker={ticker} />
        ) : (
          "There was an error fetching the stock data"
        )}
      </div>
      <TimelineSelector />
    </div>
  );
}

export default StockChart;
