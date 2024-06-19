interface IStockData {
  StartDate: string;
  StartTime: string;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
  Date: string;
}

interface IStockDataView {
  
}

type Status = "READY" | "LOADING" | "ERROR";

type TimePeriod = "1D" | "5D" | "1M" | "6M" | "YTD" | "1Y" | "5Y";
