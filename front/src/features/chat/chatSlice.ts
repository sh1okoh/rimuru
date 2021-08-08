import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState, ThunkApi } from '../../app/store';
import { ChatState } from './interface';

export const initialState: ChatState = {
  isLoading: true,
}

// interface connectSockeRequest {

// }

// export const connectSocket = createAsyncThunk<unknown, connectSockeRequest, ThunkApii>(

// );

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    initialize: (state) => {
      return {
        ...state,
        isLoading: false,
      }
    }
  },
  extraReducers: {
  }
})

export default chatSlice.reducer;