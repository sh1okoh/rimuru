import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState, ThunkApi } from '../../app/store';
// import { signIn } from './loginAPI';
import { httpPost } from '../../common/httpClient';
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
  "login/login",
  async (request, thunkApi) => {
    const path = 'login';
    const body = {
      email: request.email,
      password: request.password,
    }
    const response = httpPost(path, body, thunkApi);
    thunkApi.dispatch(redirectTo('/room'));

    // LoginAPI.signIn(url, body, true);
    // const path = "/login";
    // await thunkApi.dispatch(fetchCsrfToken());
    // const response = await httpPost<unknown>(path, request, thunkApi);
    // thunkApi.dispatch(redirectTo("/home"));
    // thunkApi.dispatch(resetMessage());

    return response;
  },
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state,  action) => {
      console.log(action);
      state.status = 'loading';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action);
      state.status = 'succeeded';
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action);
      state.status = 'failed';
      console.error(action.error.message);
    })
  }
});

export const selectState: (state: RootState) => RootState = (state: RootState) => state;

export default loginSlice.reducer;

