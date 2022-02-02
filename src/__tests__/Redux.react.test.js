// import * as Reducers from '../redux/stocks/reducers/stockReducer';
import * as Actions from '../redux/stocks/actions/stockAction';

describe('Action creators', () => {
  test('returns the right action', () => {
    const action = Actions.getAllStocks();
    const res = { type: 'stockMetrics/stocks/ALLSTOCKS_RETRIEVED', payload: undefined };
    expect(action).toEqual(res);
  });

  test('returns the right action', () => {
    const testArr = [{}];
    const action = Actions.getAllStocks(testArr);
    const res = { type: 'stockMetrics/stocks/ALLSTOCKS_RETRIEVED', payload: undefined };
    expect(action).not.toEqual(res);
  });

  test('returns the right action', () => {
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
