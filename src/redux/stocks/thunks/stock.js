import * as Actions from '../actions/stockAction';

const APIKEY = '01379d92653f0acb39ad012ef167fe3e';

const fetchStocks = () => async (dispatch) => {
  const res = await fetch(`https://financialmodelingprep.com/api/v3/actives?limit=30&apikey=${APIKEY}`);
  const data = await res.json();
  dispatch(Actions.getAllStocks(data));
};

export default fetchStocks;
