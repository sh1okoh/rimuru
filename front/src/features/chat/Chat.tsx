import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react';
import socketClient, { Socket } from 'socket.io-client';

export const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(socketClient(''));
  const [responseMessage, setResponseMessage] = useState<Array<string>>([]);
  useEffect(() => {
    const socket: Socket = socketClient('http://localhost:3000', {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    });
    setSocket(socket);

    socket.on('response message', data => {
      setResponseMessage(responseMessage => [...responseMessage, data])
    })
  }, []);

  const handleOnChangeForm = (value: any) => {
    setMessage(value);
  };

  const sendMessage = () => {
    socket.emit('sendMessage', message);
  }

  const submitOnForm = () => {
    sendMessage();
  }

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
      <div>
        {
          responseMessage.map((message, idx) => {
            return <p key={`message_${idx}`}>{message}</p>
          })
        }
      </div>
      </Typography>
      <div>
      <form>
        <TextField
          id="standard-text"
          label="メッセージを入力"
          name="message"
          onChange={ e => handleOnChangeForm(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={() => submitOnForm()}>
          送信
        </Button>
      </form>
    </div>
    </Container>
  )
}