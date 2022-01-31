import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { booksReducer } from './books/reducers/books';

// combine one or more reducers
const reducer = combineReducers({
  booksReducer,
});

// create the store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;