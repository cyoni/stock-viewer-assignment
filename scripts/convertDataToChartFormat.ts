export const convertDataToChartFormat = (data: IStockData[]) => {
  if (!Array.isArray(data)) {
    console.error("no data found");
    return;
  }

  const response = data.map((stock) => {
    return {
      name: stock.StartTime,
      pv: stock.Open,
    };
  });

  return response;
};
