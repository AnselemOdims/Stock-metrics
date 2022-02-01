import * as Actions from '../actions/stockAction';

const initStockState = {
  stocks: [],
};

const initDetailsState = {
  details: [],
};

const initialLoading = { loading: false };

// reducer for fetching all companies stock listing
export const stocksReducer = (state = initStockState, { type, payload }) => {
  switch (type) {
    case Actions.ALLSTOCKS_RETRIEVED:
      return { stocks: [...payload] };
    default:
      return state;
  }
};

// reducer for fetching single company's stock listing
export const detailsReducer = (state = initDetailsState, { type, payload }) => {
  switch (type) {
    case Actions.SINGLESTOCK_RETRIEVED:
      return { details: [...payload] };
    default:
      return state;
  }
};

// the reducer function for the loaders
export const loadingReducer = (state = initialLoading, { type, payload }) => {
  switch (type) {
    case Actions.LOADING_STARTED:
      return { ...state, loading: payload };
    case Actions.LOADING_FINISHED:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
