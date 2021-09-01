import cookieParser from 'cookie-parser';
import express from 'express';
import { Server as SocketIo } from 'socket.io';
import StatusCodes from 'http-status-codes';
import  { cookieProps, corsPropsForSocketIO } from './shared/constants';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import http from 'http';
const app = express();
const { BAD_REQUEST, UNAUTHORIZED, OK } = StatusCodes;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(cookieProps.secret));

let options: cors.CorsOptions = {};
if (process.env.NODE_ENV === 'development') {
  options = {
    origin: 'http://localhost:3001'
  };
  app.use(cors(options));
  app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
  options  = {
    origin: 'http://localhost:3001' // TODO: production用にする
  }
  app.use(helmet());
}
app.use(cors(options));

const server = http.createServer(app);
const io = new SocketIo(server, {
  cors: { ...corsPropsForSocketIO }
});

io.sockets.on('connect', (socket) => {
  socket.on('sendMessage', (message) => {
    const dateTime = new Date().toTimeString();
    io.emit('response message', { message, dateTime } );
  })
});

export default server