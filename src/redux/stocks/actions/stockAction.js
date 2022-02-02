export const ALLSTOCKS_RETRIEVED = 'stockMetrics/stocks/ALLSTOCKS_RETRIEVED';
export const SINGLESTOCK_RETRIEVED = 'stockMetrics/stocks/SINGLESTOCK_RETRIEVED';
export const LOADING_STARTED = 'stockMetrics/stocks/LOADING_STARTED';
export const LOADING_FINISHED = 'stockMetrics/stocks/LOADING_FINISHED';

export const getAllStocks = (payload) => ({
  type: ALLSTOCKS_RETRIEVED,
  payload,
});

export const getSingleStock = (payload) => ({
  type: SINGLESTOCK_RETRIEVED,
  payload,
});

// loading start action creator
export const loadingStart = (payload) => ({
  type: LOADING_STARTED,
  payload,
});

// loading end action creator
export const loadingEnd = (payload) => ({
  type: LOADING_FINISHED,
  payload,
});
