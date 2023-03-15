import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  stockList: [],
  isLoading: false,
  market: '',
  filteredList: [],
};

export const fetchStocks = createAsyncThunk('markets/fetchStocks',
  async (market) => {
    const URL = `https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=100000000000000&exchange=${market}&limit=200&apikey=8024b4dd209dccf97c32c88c481f8ad6`;
    const resp = await axios(URL);
    return resp.data;
  });

const marketsSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {
    selectMarket: (state, action) => {
      state.market = action.payload;
    },
    filterStocks: (state, action) => {
      const searchTerm = action.payload;
      state.filteredList = state.stockList.filter((stock) => {
        const nameMatch = stock.companyName.toLowerCase().includes(searchTerm.toLowerCase());
        const symbolMatch = stock.symbol.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch || symbolMatch;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStocks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stockList = action.payload;
        state.filteredList = action.payload;
      })
      .addCase(fetchStocks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectMarket, filterStocks } = marketsSlice.actions;
export default marketsSlice.reducer;
