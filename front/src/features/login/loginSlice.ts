import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk, ThunkApi } from '../../app/store';
import { LoginState } from './interface';


const initialState: LoginState = {
  email: '',
  password: '',
}

export const loginSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    initialize: (state) => {
      return {
        ...state,
      }
    },
    changeFormValue: (state,  action: PayloadAction<LoginState>) => {
      return {
        ...state,
      }
    },
    submit: (state) => {
      return {
        ...state,
      }
    }
  },
  extraReducers: {
  }
});

export const { submit, changeFormValue } = loginSlice.actions;

export const selectState = (state: RootState) => state;


export default loginSlice.reducer;

