import { ONE_DAY } from "@/consts/general.consts";

export async function fetchStockDataClient({
  tkr = "AAPL.XNAS",
  time = ONE_DAY,
}) {
  try {
    const params = `tkr=${tkr}&time=${time}`;
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
}
