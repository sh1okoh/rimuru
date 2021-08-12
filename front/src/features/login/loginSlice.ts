import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState, ThunkApi } from '../../app/store';
import { post } from "../../common/HttpClient";
import { LoginState } from './interface';
// import { LoginAPI } from './loginAPI';


const initialState: LoginState = {
  email: '',
  password: '',
  status: 'idle', 
}

export const login = createAsyncThunk<unknown, LoginState, ThunkApi>(
  "login/login",
  async (request, thunkApi) => {
    console.log('request email', request.email);
    console.log('request password', request.password);
    const  url = 'http://localhost:3000/api/login';
    const body = {
      email: request.email,
      password: request.password,
    }
    post(url, body);

    // LoginAPI.signIn(url, body, true);
    // const path = "/login";
    // await thunkApi.dispatch(fetchCsrfToken());
    // const response = await httpPost<unknown>(path, request, thunkApi);
    // thunkApi.dispatch(redirectTo("/home"));
    // thunkApi.dispatch(resetMessage());

    // return response;
  },
);

export const loginSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    initialize: (state) => {
      return {
        ...state,
      }
    },
  },
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

