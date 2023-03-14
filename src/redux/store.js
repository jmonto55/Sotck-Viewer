import { configureStore } from '@reduxjs/toolkit';
import marketsReducer from './markets/marketsSlice';

const store = configureStore({
  reducer: {
    markets: marketsReducer,
  },
});

export default store;
