import { configureStore } from '@reduxjs/toolkit';
import binsReducer from '../features/bins';
import requestsReducer from '../features/requests';
import binRequestsReducer from '../features/binRequests';

const store = configureStore({
  reducer: {
    bins: binsReducer,
    requests: requestsReducer,
    binRequests: binRequestsReducer,
  },
});

export default store;