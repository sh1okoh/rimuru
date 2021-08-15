import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MessageState {
  messages: string[];
}

const initialState: MessageState =  {
  messages: []
}

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      const set = new Set(state.messages);
      set.add(action.payload);
      state.messages = Array.from(set);
    }
  }
})

export const {
  setMessage,
} = messagesSlice.actions;

export const messagesReducer = messagesSlice.reducer;
