import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import socketClient  from "socket.io-client";

import { Form } from '../form/Form'
import { chatConnect, chatFetchSpreadMessage, selectChat } from './chatSlice';


export const Chat: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const socket = socketClient('http://localhost:3000', {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    });
    dispatch(chatConnect(socket));
    dispatch(chatFetchSpreadMessage(socket));
  })
  const { message } = useSelector(selectChat);

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
      <h1>Chat</h1>
      <div>
        <p>{message}</p>
      </div>
      </Typography>
      <Form />
    </Container>
  )
}