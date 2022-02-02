// import * as Reducers from '../redux/stocks/reducers/stockReducer';
import * as Actions from '../redux/stocks/actions/stockAction';

describe('Get all stocks', () => {
  test('should return undefined if no payload is specified', () => {
    const action = Actions.getAllStocks();
    const res = { type: 'stockMetrics/stocks/ALLSTOCKS_RETRIEVED', payload: undefined };
    expect(action).toEqual(res);
  });

  test('should not return undefined if payload is specified', () => {
    const testArr = [{}];
    const action = Actions.getAllStocks(testArr);
    const res = { type: 'stockMetrics/stocks/ALLSTOCKS_RETRIEVED', payload: undefined };
    expect(action).not.toEqual(res);
  });

  test('should return the correct action object', () => {
    const testArr = [{
      ticker: 'AAPL',
      companyName: 'Apple Inc.',
      changes: 1.02,
      price: '290',
      changesPercentage: '0.23',
    }];
    const action = Actions.getAllStocks(testArr);
    const res = { type: 'stockMetrics/stocks/ALLSTOCKS_RETRIEVED', payload: testArr };
    expect(action).toEqual(res);
  });
});

describe('Get single stock', () => {
  test('should return undefined if no payload is specified', () => {
    const action = Actions.getSingleStock();
    const res = { type: 'stockMetrics/stocks/SINGLESTOCK_RETRIEVED', payload: undefined };
    expect(action).toEqual(res);
  });

  test('should not return undefined if payload is specified', () => {
    const testArr = [{}];
    const action = Actions.getSingleStock(testArr);
    const res = { type: 'stockMetrics/stocks/SINGLESTOCK_RETRIEVED', payload: undefined };
    expect(action).not.toEqual(res);
  });

  test('should return the correct action object', () => {
    const testArr = [{
      calendarYear: '2021',
      eps: 2.69,
      ebitdaratio: 2.51,
      revenue: 25000000000,
      grossProfit: 16000000000,
      costAndExpenses: 12000000000,
      fillingDate: '2020-02-04',
      acceptedDate: '2020-02-04',
      symbol: 'AAPL',
    }];
    const action = Actions.getSingleStock(testArr);
    const res = { type: 'stockMetrics/stocks/SINGLESTOCK_RETRIEVED', payload: testArr };
    expect(action).toEqual(res);
  });
});

describe('loading creators', () => {
  test('should return undefined if no payload is specified', () => {
    const action = Actions.loadingStart();
    const res = { type: 'bookStore/books/LOADING_STARTED', payload: undefined };
    expect(action).toEqual(res);
  });

  test('should not return undefined if payload is specified', () => {
    const load = {
      loading: true,
    };
    const action = Actions.loadingStart(load);
    const res = { type: 'bookStore/books/LOADING_STARTED', payload: load };
    expect(action).toEqual(res);
  });

  test('should return undefined if no payload is specified', () => {
    const action = Actions.loadingEnd();
    const res = { type: 'bookStore/books/LOADING_FINISHED', payload: undefined };
    expect(action).toEqual(res);
  });

  test('should not return undefined if payload is specified', () => {
    const load = {
      loading: false,
    };
    const action = Actions.loadingEnd(load);
    const res = { type: 'bookStore/books/LOADING_FINISHED', payload: load };
    expect(action).toEqual(res);
  });
});
