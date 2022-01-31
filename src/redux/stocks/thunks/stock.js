import * as Actions from '../actions/stockAction';

const APIKEY = '01379d92653f0acb39ad012ef167fe3e';

export const fetchStocks = () => async (dispatch) => {
  const res = await fetch(`https://financialmodelingprep.com/api/v3/actives?limit=30&apikey=${APIKEY}`);
  const data = await res.json();
  dispatch(Actions.getAllStocks(data));
};

export const fetchDetails = (payload) => async (dispatch) => {
  const res = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/${payload}?limit=120&apikey=${APIKEY}`);
  const data = await res.json();
  dispatch(Actions.getSingleStock(data));
};
