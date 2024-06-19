import { ONE_DAY } from "@/consts/general.consts";

interface IProps {
  ticker: string;
  time: TimePeriod;
}
export async function fetchStockDataClient({ ticker, time = ONE_DAY }: IProps) {
  try {
    if (!ticker || !time) {
      throw new Error("Tcr or time are mandatory fields");
    }

    const params = `tkr=${ticker}&time=${time}`;
    const endpoint = `/api/stock-api?${params}`;

    const data = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await data.json();
  } catch (error) {
    console.error("an error occurred");
  }
  return null;
}
