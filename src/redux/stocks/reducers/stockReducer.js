import * as Actions from '../actions/stockAction';
import {searchArr} from '../../../utils/helper'

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
    case Actions.STOCK_SEARCHED:
      return { stocks: searchArr(state.stocks, payload)}
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
