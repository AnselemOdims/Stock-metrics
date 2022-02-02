import * as Actions from '../actions/stockAction';

const APIKEY = '01379d92653f0acb39ad012ef167fe3e';

export const fetchStocks = () => async (dispatch) => {
  try {
    dispatch(Actions.loadingStart(true));
    const res = await fetch(`https://financialmodelingprep.com/api/v3/actives?limit=100&apikey=${APIKEY}`);
    const data = await res.json();
    dispatch(Actions.getAllStocks(data));
  } catch (err) {
    throw new Error(err);
  } finally {
    dispatch(Actions.loadingEnd(false));
  }
};

export const fetchDetails = (payload) => async (dispatch) => {
  try {
    dispatch(Actions.loadingStart(true));
    const res = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/${payload}?limit=120&apikey=${APIKEY}`);
    const data = await res.json();
    dispatch(Actions.getSingleStock(data));
  } catch (err) {
    throw new Error(err);
  } finally {
    dispatch(Actions.loadingEnd(false));
  }
};
