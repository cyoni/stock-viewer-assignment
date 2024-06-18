import mock from "../mock.json"
import MenuTabs from "@/components/MenuTabs";
import StockChart from "@/components/StockChart";
import StockHeader from "@/components/StockHeader";

export default async function Home() {

  const stockData = mock as IStockData[]


  return (
    <main className="min-h-screen max-w-screen-lg mx-auto">
      <StockHeader />

      <MenuTabs />

      <StockChart />
    </main>
  );
}
