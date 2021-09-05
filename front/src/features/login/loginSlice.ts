import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState, ThunkApi } from '../../app/store';
import { httpPost } from '../../common/HttpClient';
import { redirectTo } from '../../routerSlice';
import { LoginState } from './interface';


const initialState: LoginState = {
  email: '',
  password: '',
  status: 'idle', 
}

interface LoginRequest {
  email: string,
  password: string,
}

export const login = createAsyncThunk<unknown, LoginRequest, ThunkApi>(
  "login",
  async (request: LoginRequest, thunkApi) => {
    const path = 'login';
    const body = {
      email: request.email,
      password: request.password,
    }
    const response = httpPost<unknown>(path, body, thunkApi);
    // console.log('response', response);
    // thunkApi.dispatch(redirectTo('/room'));

    return response;
  },
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(login.fulfilled, (state) => {
      state.status = 'succeeded';
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'failed';
      // console.error(action.error.message);
    })
  }
});

export const selectState: (state: RootState) => RootState = (state: RootState) => state;

export default loginSlice.reducer;

