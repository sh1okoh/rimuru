import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { Form } from '../form/Form'
import { chat } from './chatSlice';

export const Chat: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(chat({}));
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