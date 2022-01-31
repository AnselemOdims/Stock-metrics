export const ALLSTOCKS_RETRIEVED = 'stockMetrics/stocks/ALLSTOCKS_RETRIEVED';
export const SINGLESTOCK_RETRIEVED = 'stockMetrics/stocks/SINGLESTOCK_RETRIEVED';

export const getAllStocks = (payload) => ({
  type: ALLSTOCKS_RETRIEVED,
  payload,
});

export const getSingleStock = (payload) => ({
  type: SINGLESTOCK_RETRIEVED,
  payload,
});
