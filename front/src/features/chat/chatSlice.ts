import { createSlice } from '@reduxjs/toolkit';

import { ChatState } from './interface';

export const initialState: ChatState = {
  isLoading: true,
}


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