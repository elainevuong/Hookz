import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '../lib/apiClient'

export const fetchRequests = createAsyncThunk(
  'requests/fetchRequests',
  async() => {
    const data = await apiClient.fetchRequests();
    return data
  }
)

const initialState = [];

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRequests.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export default requestsSlice.reducer;