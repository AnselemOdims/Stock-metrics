import * as Actions from '../actions/stockAction';

const initStockState = {
  stocks: [],
};

const stocksReducer = (state = initStockState, { type, payload }) => {
  switch (type) {
    case Actions.ALLSTOCKS_RETRIEVED:
      return { stocks: [...payload] };
    default:
      return state;
  }
};

export default stocksReducer;
