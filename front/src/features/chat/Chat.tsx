import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import socketClient, { Socket }  from "socket.io-client";

import { changeFormValue,chatConnect, chatFetchSpreadMessage, selectChat, sendMessage } from './chatSlice';
import { ChatState } from './interface';


export const Chat: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const socket: Socket = socketClient('http://localhost:3000', {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    });
    dispatch(chatConnect(socket));
    dispatch(chatFetchSpreadMessage(socket));
  })
  const { form } = useSelector(selectChat);
  const handleOnChangeForm = (key: keyof ChatState['form'], value: any ) => {
    const newForm = {
      ...form,
      [key]: value,
    };
    dispatch(changeFormValue(newForm))
  };

  const submitOnForm = () => {
  }

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
      <h1>Chat</h1>
      <div>
        <p>{form.message}</p>
      </div>
      </Typography>
      <div>
      <form>
        <TextField
          id="standard-text"
          label="メッセージを入力"
          name="message"
          onChange={ e => handleOnChangeForm('message', e.currentTarget.value)}
        />
        <Button variant="contained" color="primary" onClick={(e) => submitOnForm()}>
          送信
        </Button>
      </form>
    </div>
    </Container>
  )
}