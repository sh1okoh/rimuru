import { Button, Container, Grid, ListItem, ListItemText, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react';
import socketClient, { Socket } from 'socket.io-client';

interface Response {
  message: string,
  dateTime: Date,
}

export const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [socket, setSocket] = useState<Socket>(socketClient(''));
  const [response, setResponse] = useState<Response[]>([]);
  useEffect(() => {
    const socket: Socket = socketClient('http://localhost:3000', {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    });
    setSocket(socket);

    socket.on('response message', (data: Response) => {
      console.log('data', data);
      setResponse(response => [...response, data]);
    })
  }, []);

  // TODO: この辺 redux で持ち回るようにしたい
  const handleOnChangeForm = (value: any) => {
    setMessage(value);
  };
  const sendMessage = () => {
    socket.emit('sendMessage', message);
    setMessage('');
  }
  const submitOnForm = () => {
    sendMessage();
  }

  return (
    <Container component="main" maxWidth="xs">
      <Grid container>
        <Grid item xs={12} >
          <Typography variant="h3" className="header-message">Chat</Typography>
        </Grid>
      </Grid>
      <Paper style={{height: 500, maxHeight: 500, overflow: 'auto'}}>
      <ListItem key="2">
        <Grid container>
          <Grid item xs={12}>
          {
            response.map((data, idx) => {
              return (
                <>
                  <ListItemText key={`message_${idx}`} primary={data.message}></ListItemText>
                  <ListItemText secondary={data.dateTime}></ListItemText>
                </>
              )
            })
          }
          </Grid>
        </Grid>
      </ListItem>
      </Paper>
      <div>
      <form>
        <TextField
          id="standard-text"
          label="メッセージを入力"
          name="message"
          value={message}
          onChange={ e => handleOnChangeForm(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={() => submitOnForm()} disabled={message === ''}>
          送信
        </Button>
      </form>
    </div>
    </Container>
  )
}