import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState, ThunkApi } from '../../app/store';
import { RoomState } from './interface';

export const initialState: RoomState = {
  isLoading: true,
}

// interface connectSockeRequest {

// }

// export const connectSocket = createAsyncThunk<unknown, connectSockeRequest, ThunkApii>(

// );

// export const roomSlice = createSlice({
//   name: 'room',
//   initialState,
//   reducers: {
//     initialize: (state) => {
//       return {
//         ...state,
//         isLoading: false,
//       }
//     }
//   },
//   extraReducers: {
     
//   }
// })