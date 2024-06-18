import React from "react";
import { Button } from "./ui/button";
import {
  FIVE_DAYS,
  FIVE_YEARS,
  ONE_DAY,
  ONE_YEAR,
  SIX_MONTHS,
  YTD,
} from "@/consts/general.consts";

interface IProps {
  fetchStockData: Function;
  selectedTime: string;
}

function TimelineSelector({ fetchStockData, selectedTime }: IProps) {
  return (
    <div className="flex gap-2 mt-5 ml-2">
      {[ONE_DAY, FIVE_DAYS, SIX_MONTHS, YTD, ONE_YEAR, FIVE_YEARS].map(
        (time, i) => (
          <Button
            key={i}
            variant="outline"
            className={`px-2 rounded-md ${
              selectedTime === time ? "bg-black text-white" : ""
            } `}
            onClick={() => fetchStockData(time)}
          >
            {time}
          </Button>
        )
      )}
    </div>
  );
}

export default TimelineSelector;
