import { Action,configureStore, ThunkAction } from '@reduxjs/toolkit';

import chatReducer from '../features/chat/chatSlice';
import counterReducer from '../features/counter/counterSlice';
import formReducer from '../features/form/formSlice';
import loginReducer from '../features/login/loginSlice';
import { messagesReducer } from '../messagesSlice';
import { chatApi } from '../services/chat';
 
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
    chat: chatReducer,
    login: loginReducer,
    messages: messagesReducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(chatApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export interface ThunkApi {
  dispatch: typeof store.dispatch;
  state: RootState;
}