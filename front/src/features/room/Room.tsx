import React, { useState, useEffect } from 'react';
import { Form } from '../form/Form'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import socketIOClient from "socket.io-client";


export const Room: React.FC = () => {
  const selectState = (state: RootState) => state;
  const [response, setResponse] = useState("");
  useEffect(() => {
    const socket = socketIOClient('http://127.0.0.1:3000/connect-socket-room/1');
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);
  return (
    <div>
      <p>{response}</p>
      <Form />
    </div>
  )
}