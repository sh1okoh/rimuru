import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Socket }  from "socket.io-client";

import { ThunkApi } from '../../app/store'; 
import { ChatState } from './interface';

export const initialState: ChatState = {
  status: 'idle',
}

export const chatConnect = createAsyncThunk<unknown, Socket, ThunkApi>(
  "chat/connect",
  async (socket: Socket, thunkApi) => {
    socket.on('connect', () => {
      socket.emit('hoge', 'foo!!!!!');
    })
  },
);

export const chatFetchSpreadMessage = createAsyncThunk<unknown, Socket, ThunkApi>(
  "chat/fetchSpreadMessage",
  async (socket: Socket, thunkApi) => {
    socket.on('spread message', (message) => {
      console.log('spread message :', message);
    })
  }
)

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    leave: (state) => {
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(chatConnect.pending, (state,  action) => {
      state.status = 'loading';
    });
    builder.addCase(chatConnect.fulfilled, (state, action) => {
      console.log(action);
      state.status = 'succeeded';
    })
    builder.addCase(chatConnect.rejected, (state, action) => {
      console.log(action);
      state.status = 'failed';
    });
    builder.addCase(chatFetchSpreadMessage.pending, (state, action) => {
      console.log('state', state);
      console.log('action', action);
    });
    builder.addCase(chatFetchSpreadMessage.fulfilled, (state, action) => {
      console.log('state', state);
      console.log('action', action);
    });
    builder.addCase(chatFetchSpreadMessage.rejected, (state, action) => {
      console.log('state', state);
      console.log('action', action);
    });
  }
})

export default chatSlice.reducer;
