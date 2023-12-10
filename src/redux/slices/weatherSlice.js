import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {URLS} from '../../constants/apis';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (location, thunkAPI) => {
    try {
      const response = await axios.get(
        URLS.WEATHER_API(location.latitude,location.longitude)
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.errorMessage;
    });
  },
});

export default weatherSlice.reducer;
