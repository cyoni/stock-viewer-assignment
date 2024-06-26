import MenuTabs from "@/components/MenuTabs";
import StockChart from "@/components/StockChart";
import StockHeader from "@/components/StockHeader";

export default async function Home() {
  return (
    <main>
      <StockHeader />
      <MenuTabs />
      <StockChart />
    </main>
  );
}
