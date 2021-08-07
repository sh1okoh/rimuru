import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { RoomState } from './interface';

export const initialState: RoomState = {
  isLoading: true,
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    initialize: (state) => {
      return {
        ...state,
        isLoading: false,
      }
    }
  }
})