export const sumRevenue = (details) => details.reduce((cur, { revenue }) => cur + revenue, 0) / (10 ** 9);

export const sumProfit = (details) => details.reduce((cur, { grossProfit }) => cur + grossProfit, 0) / (10 ** 9);

export const sumExpenses = (details) => details.reduce((cur, { costAndExpenses }) => cur + costAndExpenses, 0) / (10 ** 9);
