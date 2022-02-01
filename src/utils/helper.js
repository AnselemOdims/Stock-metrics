export const sumRevenue = (details) => (
  details.reduce((cur, { revenue }) => cur + revenue, 0) / (10 ** 9)
);

export const sumProfit = (details) => (
  details.reduce((cur, { grossProfit }) => cur + grossProfit, 0) / (10 ** 9)
);

export const sumExpenses = (details) => (
  details.reduce((cur, { costAndExpenses }) => cur + costAndExpenses, 0) / (10 ** 9)
);

export const sumPrices = (stocks) => (
  stocks.reduce((cur, { price }) => cur + Number(price), 0)
    .toFixed(2)
);

export const sumPercent = (stocks) => (
  (stocks.reduce((cur, { changesPercentage }) => cur + Number(changesPercentage), 0) / 100)
    .toFixed(2)
);

export const sumChanges = (stocks) => (
  (stocks.reduce((cur, { changes }) => cur + Number(changes), 0) / 100)
    .toFixed(2)
);

export const searchFunc = (stock, item) => (
  stock.companyName.toLowerCase().includes(item.toLowerCase().trim())
  || stock.ticker.toLowerCase().includes(item.toLowerCase().trim())
);
