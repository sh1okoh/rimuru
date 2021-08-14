import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  interface routerState {
  redirectTo?: string;
}

const initialState: routerState = {};

export const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    redirectTo: (state, action: PayloadAction<`/${string}`>) => {
      state.redirectTo = action.payload;
    }
  }
})

export const { redirectTo } = routerSlice.actions

export default routerSlice.reducer;
