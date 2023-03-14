import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const nasdaqURL = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapLowerThan=10000000000000&betaMoreThan=1&volumeMoreThan=100&exchange=NASDAQ&apikey=940ff5e9458d7307aae74af32f03bcfb';

const initialState = {
  stockList: [],
  isLoading: false,
  loaded: false,
};

export const fetchStocks = createAsyncThunk('markets/fetchStocks',
  async () => {
    const resp = await axios(nasdaqURL);
    return resp.data;
  });

const marketsSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocks.pending, (state) => {
        state.isLoading = true;
        state.loaded = false;
      })
      .addCase(fetchStocks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loaded = true;
        state.stockList = action.payload;
      })
      .addCase(fetchStocks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default marketsSlice.reducer;
