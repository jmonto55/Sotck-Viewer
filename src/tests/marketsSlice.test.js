import marketsReducer, { selectMarket, selectStock, filterStocks } from '../redux/markets/marketsSlice';

describe('Test suite for markets reducer', () => {
  const initialState = {
    stockList: [
      { companyName: 'Bank of America', symbol: 'BAC-PL', price: 1158.39 },
      { companyName: 'Danaher Corporation', symbol: 'DHR-PB', price: 1249.28 },
      { companyName: 'Berkshire Hathaway Inc.', symbol: 'BRK-B', price: 300.93 },
      { companyName: 'Walmart Inc.', symbol: 'WMT', price: 138.64 },
    ],
    isLoading: false,
    market: '',
    filteredList: [],
    stock: {},
  };

  it('Should assign "ETF" to status.market', () => {
    const action = selectMarket('ETF');
    const newState = marketsReducer(initialState, action);

    expect(newState.market).toEqual('ETF');
  });

  it('Should assign the selected Stock to status.stock', () => {
    const stock = {
      companyName: 'Bank of America',
      symbol: 'BAC-PL',
      price: 1158.39,
      industry: 'Banks—Diversified',
      sector: 'Financial Services',
    };
    const action = selectStock(stock);
    const newState = marketsReducer(initialState, action);

    expect(newState.stock.symbol).toEqual('BAC-PL');
    expect(newState.stock.industry).toEqual('Banks—Diversified');
    expect(newState.stock.price).toEqual(1158.39);
  });

  it('Should test if the filterStock method filters by name && symbol', () => {
    const input1 = 'Walmart';
    const action1 = filterStocks(input1);
    const newState1 = marketsReducer(initialState, action1);

    expect(newState1.filteredList).toHaveLength(1);
    expect(newState1.filteredList[0]).toEqual({ companyName: 'Walmart Inc.', symbol: 'WMT', price: 138.64 });
    expect(newState1.filteredList[0].price).toEqual(138.64);

    const input2 = 'B';
    const action2 = filterStocks(input2);
    const newState2 = marketsReducer(initialState, action2);

    expect(newState2.filteredList).toHaveLength(3);
    expect(newState2.filteredList[2].symbol).toEqual('BRK-B');
  });
});
