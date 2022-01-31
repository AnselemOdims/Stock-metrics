import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { stocksReducer, detailsReducer } from './stocks/reducers/stockReducer';

// combine one or more reducers
const reducer = combineReducers({
  stocksReducer,
  detailsReducer,
});

// create the store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
