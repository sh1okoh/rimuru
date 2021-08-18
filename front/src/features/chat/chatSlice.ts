import { statement } from '@babel/template';
import { createAsyncThunk,createSlice  } from '@reduxjs/toolkit';
import socketClient  from "socket.io-client";

import { ThunkApi } from '../../app/store'; 
import { ChatState } from './interface';

export const initialState: ChatState = {
  status: 'idle',
}

export const chat = createAsyncThunk<unknown, unknown, ThunkApi>(
  "chat",
  async (request: unknown, thunkApi) => {
    const socket = socketClient('http://localhost:3000', {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    });
    socket.on('connect', () => {
      console.log('connect!');
    })
  },
);

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    leave: (state) => {
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(chat.pending, (state,  action) => {
      console.log(action);
      state.status = 'loading';
    });
    builder.addCase(chat.fulfilled, (state, action) => {
      console.log(action);
      state.status = 'succeeded';
    })
    builder.addCase(chat.rejected, (state, action) => {
      console.log(action);
      state.status = 'failed';
    })
  }
})

// export const {  } = chatSlice.actions;

export default chatSlice.reducer;
