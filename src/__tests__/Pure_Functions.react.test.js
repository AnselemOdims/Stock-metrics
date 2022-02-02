import * as Reducers from '../redux/stocks/reducers/stockReducer';
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
    const res = { type: 'stockMetrics/stocks/LOADING_STARTED', payload: undefined };
    expect(action).toEqual(res);
  });

  test('should not return undefined if payload is specified', () => {
    const load = {
      loading: true,
    };
    const action = Actions.loadingStart(load);
    const res = { type: 'stockMetrics/stocks/LOADING_STARTED', payload: load };
    expect(action).toEqual(res);
  });

  test('should return undefined if no payload is specified', () => {
    const action = Actions.loadingEnd();
    const res = { type: 'stockMetrics/stocks/LOADING_FINISHED', payload: undefined };
    expect(action).toEqual(res);
  });

  test('should not return undefined if payload is specified', () => {
    const load = {
      loading: false,
    };
    const action = Actions.loadingEnd(load);
    const res = { type: 'stockMetrics/stocks/LOADING_FINISHED', payload: load };
    expect(action).toEqual(res);
  });
});

describe('Stocks reducer', () => {
  test('should return empty array if type is not specified', () => {
    const reducer = Reducers.stocksReducer(undefined, {});
    expect(reducer).toEqual({ stocks: [] });
  });

  test('should return a stocks object', () => {
    const type = 'stockMetrics/stocks/ALLSTOCKS_RETRIEVED';
    const payload = [
      {
        ticker: 'AAPL',
        companyName: 'Apple Inc.',
        changes: 1.02,
        price: '290',
        changesPercentage: '0.23',
      },
    ];
    const reducer = Reducers.stocksReducer([], { type, payload });
    expect(reducer).toEqual({ stocks: [...payload] });
  });
});

describe('Details reducer', () => {
  test('should return empty array if type is not specified', () => {
    const reducer = Reducers.detailsReducer(undefined, {});
    expect(reducer).toEqual({ details: [] });
  });

  test('should return a details object', () => {
    const type = 'stockMetrics/stocks/SINGLESTOCK_RETRIEVED';
    const payload = [
      {
        calendarYear: '2021',
        eps: 2.69,
        ebitdaratio: 2.51,
        revenue: 25000000000,
        grossProfit: 16000000000,
        costAndExpenses: 12000000000,
        fillingDate: '2020-02-04',
        acceptedDate: '2020-02-04',
        symbol: 'AAPL',
      },
    ];
    const reducer = Reducers.detailsReducer([], { type, payload });
    expect(reducer).toEqual({ details: [...payload] });
  });
});

describe('Loading reducer', () => {
  test('should return false if type is not specified', () => {
    const reducer = Reducers.loadingReducer(undefined, {});
    expect(reducer).toEqual({ loading: false });
  });

  test('should return a loading object', () => {
    const type = 'stockMetrics/stocks/LOADING_STARTED';
    const payload = true;
    const reducer = Reducers.loadingReducer([], { type, payload });
    expect(reducer).toEqual({ loading: payload });
  });

  test('should return a loading object', () => {
    const type = 'stockMetrics/stocks/LOADING_FINISHED';
    const payload = false;
    const reducer = Reducers.loadingReducer([], { type, payload });
    expect(reducer).toEqual({ loading: payload });
  });
});
