import { FIVE_DAYS, ONE_DAY, ONE_MONTH, YTD } from "@/consts/general.consts";
import moment from "moment";

export const convertDataToChartFormat = (
  ticker: string,
  data: IStockData[],
  time: TimePeriod
) => {
  
  if (!Array.isArray(data)) {
    console.error("no data found");
    return;
  }

  const response = data.map((stock) => {
    let name = moment(stock.Date).format("DD/MM/YY");

    if (time === ONE_DAY) {
      name = moment(stock.Date).format("HH:mm");
    } else if (time === FIVE_DAYS || time === ONE_MONTH || time === YTD) {
      name = moment(stock.Date).format("DD/MM");
    }
    return {
      name,
      [ticker]: Math.round(stock.Open),
    };
  });

  return response;
};
