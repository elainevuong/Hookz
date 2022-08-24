import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '../lib/apiClient'

export const fetchBins = createAsyncThunk(
  'bins/fetchBins',
  async() => {
    const data = await apiClient.fetchBins();
    return data
  }
)

export const deleteBin = createAsyncThunk(
  'bins/deleteBin',
  async(binId) => {
    const data = await apiClient.deleteBin(binId);
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
    builder.addCase(deleteBin.fulfilled, (state, action) => {
      const deletedBin = action.payload
      return state.filter(bin => bin.id !== deletedBin.id)
    })
  }
})

export default binsSlice.reducer;