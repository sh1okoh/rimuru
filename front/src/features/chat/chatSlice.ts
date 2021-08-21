import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Socket }  from "socket.io-client";

import type { RootState, ThunkApi } from '../../app/store'; 
import { ChatState } from './interface';


export const initialState: ChatState = {
  message: '',
  status: 'idle',
}

export const chatConnect = createAsyncThunk<unknown, Socket, ThunkApi>(
  "chat/connect",
  async (socket: Socket, thunkApi) => {
    socket.on('connect', () => {});
  },
);


// NOTE: サーバーで無限にメッセージ飛ばしてるのがいけないかも -> 無限ループ
export const chatFetchSpreadMessage = createAsyncThunk<unknown, Socket, ThunkApi>(
  "chat/fetchSpreadMessage",
  async (socket: Socket, thunkApi) => {
    socket.on('spread message', (message) => {
      thunkApi.dispatch(fetchMessagesFullfilled(message));
    })
  }
)

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    fetchMessagesFullfilled: (state, action) => {
      const newState = {
        ...state,
        message: action.payload
      }
      console.log('newState', newState);
      return newState;
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

const { fetchMessagesFullfilled } = chatSlice.actions

export const selectChat = (state: RootState): ChatState => state.chat;

export default chatSlice.reducer;
