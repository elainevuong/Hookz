import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '../lib/apiClient'

export const fetchRequestsByBin = createAsyncThunk(
  'requests/fetchRequestsByBin',
  async(binUrl) => {
    const data = await apiClient.fetchRequestsByBin(binUrl);
    return data
  }
)

const initialState = [];

const binRequestsSlice = createSlice({
  name: 'binRequests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRequestsByBin.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export default binRequestsSlice.reducer;