import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { stocksReducer, detailsReducer, loadingReducer } from './stocks/reducers/stockReducer';

// combine one or more reducers
const reducer = combineReducers({
  stocksReducer,
  detailsReducer,
  loadingReducer,
});

// create the store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
