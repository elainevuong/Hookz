import { configureStore } from '@reduxjs/toolkit';
import binsReducer from '../features/bins';
import requestsReducer from '../features/requests';

const store = configureStore({
  reducer: {
    bins: binsReducer,
    requests: requestsReducer,
  },
});

export default store;