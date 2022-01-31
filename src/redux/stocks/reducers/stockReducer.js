import * as Actions from '../actions/stockAction';

const initStockState = {
  stocks: [],
};

const initDetailsState = {
  details: [],
};

export const stocksReducer = (state = initStockState, { type, payload }) => {
  switch (type) {
    case Actions.ALLSTOCKS_RETRIEVED:
      return { stocks: [...payload] };
    default:
      return state;
  }
};

export const detailsReducer = (state = initDetailsState, { type, payload }) => {
  switch (type) {
    case Actions.SINGLESTOCK_RETRIEVED:
      return { details: [...payload] };
    default:
      return state;
  }
};
