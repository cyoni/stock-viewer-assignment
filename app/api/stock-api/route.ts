import { fetchStockDataServer } from "@/scripts/fetchStockDataServer";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const tkr = searchParams.get("tkr");
    const time = searchParams.get("time");

    const data = await fetchStockDataServer({ tkr, time });
    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error(error.message);
    return new Response("an error occurred", { status: 500 });
  }
}
