import React, { useContext } from "react";
import { Button } from "./ui/button";
import {
  FIVE_DAYS,
  FIVE_YEARS,
  ONE_DAY,
  ONE_MONTH,
  ONE_YEAR,
  SIX_MONTHS,
  YTD,
} from "@/consts/general.consts";
import { CacheContext } from "@/Context/CacheContext";

function TimelineSelector() {
  const { selectedTime, changeTime } = useContext(CacheContext);

  return (
    <div className="flex gap-2 mt-5 ml-2">
      {[ONE_DAY, FIVE_DAYS, ONE_MONTH, SIX_MONTHS, YTD, ONE_YEAR, FIVE_YEARS].map(
        (time, i) => (
          <Button
            key={i}
            variant="outline"
            className={`px-2 rounded-md ${
              selectedTime === time ? "bg-black text-white" : ""
            } `}
            onClick={() => changeTime(time)}
          >
            {time}
          </Button>
        )
      )}
    </div>
  );
}

export default TimelineSelector;
