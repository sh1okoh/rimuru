import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import React, { useEffect,useState } from 'react';
import socketIOClient from "socket.io-client";

import { useAppDispatch,useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { Form } from '../form/Form'

export const Room: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      room
    </Container>
  )
}