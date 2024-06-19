import { ONE_DAY } from "@/consts/general.consts";
import { getRequestParams } from "./getRequestParams";

export async function fetchStockDataServer({
  tkr = "AAPL.XNAS",
  time = ONE_DAY as TimePeriod,
}) {
  const { startTime, endTime } = getRequestParams(time);

  const baseUrl = process.env.STOCK_BASE_URL as string;
  const params = `en/stocks/chart/candles?Identifier=${tkr}&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${30}&Precision=Minutes&StartTime=${startTime}&EndTime=${endTime}&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
  const endpoint = `${baseUrl}/${params}`;
  const data = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const stockData = await data.json();
  return stockData;
}
