import React, { useState, useEffect } from 'react';
import { Form } from '../form/Form'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import socketIOClient from "socket.io-client";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'

export const Room: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      room
    </Container>
  )
}