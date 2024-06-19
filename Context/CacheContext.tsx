"use client";

import { ONE_DAY } from "@/consts/general.consts";
import React, { createContext, useState } from "react";

interface IContextProps {
  ticker: string;
  stockCache: { [key: string]: IStockDataView[] };
  updateStockCache: Function;
  selectedTime: TimePeriod;
  changeTime: Function;
}

interface IProps {
  children: React.ReactNode;
}

export const CacheContext = createContext({} as IContextProps);

function StockCache({ children }: IProps) {
  const [stockCache, setCache] = useState<{ [key: string]: IStockDataView[] }>(
    {}
  );
  const [selectedTime, setSelectedTime] = useState<TimePeriod>(ONE_DAY);

  const changeTime = (time: TimePeriod) => {
    setSelectedTime(time);
  };

  const updateStockCache = (key: TimePeriod, value: IStockDataView[]) => {
    setCache((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <CacheContext.Provider
      value={{
        ticker: "AAPL.XNAS",
        stockCache,
        updateStockCache,
        selectedTime,
        changeTime,
      }}
    >
      {children}
    </CacheContext.Provider>
  );
}

export default StockCache;
