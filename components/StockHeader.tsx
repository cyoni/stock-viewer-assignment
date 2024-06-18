"use client";
import React, { useEffect, useState } from "react";
import { setInterval } from "timers/promises";

function StockHeader() {
  const [stockData, setStockData] = useState<IStockData>();

  console.log("stockData", stockData);

  const fetchStockData = async () => {
    ///const data = await stockFetcher({ period: 1 });

    setStockData([]);
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      fetchStockData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full shadow-md rounded-md flex gap-16 p-3 items-center mt-10">
      <div className="px-10">
        <div className="text-xl font-bold">Apple Inc</div>
        <div className="text-gray-400">APPL (nasdaq-US)</div>
      </div>

      <div className="">
        <div className="text-3xl font-bold">1235</div>
        <div className="text-xs text-gray-400">
          As of: Jun 18, 2024 11:03 UTC -4
        </div>
      </div>

      <div className="flex gap-8 items-center">
        <div>
          <div className="font-bold">Open</div>
          <div>217.59</div>
        </div>
        <div>
          <div className="font-bold">High</div>
          <div>1234.59</div>
        </div>
        <div>
          <div className="font-bold">Low</div>
          <div>22.59</div>
        </div>
      </div>
    </div>
  );
}

export default StockHeader;
