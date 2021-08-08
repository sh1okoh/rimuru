import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk, ThunkApi } from '../../app/store';
import { LoginState } from './interface';
import { httpPost } from "../../common/HttpClient";


const initialState: LoginState = {
  email: '',
  password: '',
  status: 'idle', 
}

export const login = createAsyncThunk<unknown, LoginState, ThunkApi>(
  "login/login",
  async (request, thunkApi) => {
    const path = "/login";
    // await thunkApi.dispatch(fetchCsrfToken());
    const response = await httpPost<unknown>(path, request, thunkApi);
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
      state.status = 'loading';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'succeeded';
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'failed';
      console.error(action.error.message);
    })
  }
});

export const selectState = (state: RootState) => state;

export default loginSlice.reducer;

