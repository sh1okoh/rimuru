import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import socketClient  from "socket.io-client";

import { Form } from '../form/Form'
import { chatConnect, chatFetchSpreadMessage } from './chatSlice';


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
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
      Chat
      </Typography>
      <Form />
    </Container>
  )
}