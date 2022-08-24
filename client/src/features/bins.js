import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '../lib/apiClient'

export const fetchBins = createAsyncThunk(
  'bins/fetchBins',
  async() => {
    const data = await apiClient.fetchBins();
    return data
  }
)

const initialState = [];

const binsSlice = createSlice({
  name: 'bins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBins.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export default binsSlice.reducer;