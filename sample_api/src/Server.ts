import cookieParser from 'cookie-parser';
import http from 'http';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { Server as SocketIo } from 'socket.io';
import StatusCodes from 'http-status-codes';
import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';

import BaseRouter from './routes';
import logger from '@shared/Logger';
import { cookieProps } from '@shared/constants';
import cors from 'cors';

const app = express();
const { BAD_REQUEST } = StatusCodes;



/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(cookieProps.secret));
const options: cors.CorsOptions = {
    origin: 'http://localhost:3001'
  };
app.use(cors(options));


// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

// Add APIs
app.use('/api', BaseRouter);

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.err(err, true);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});



/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

// Login page
// app.get('/', (req: Request, res: Response) => {
//     return res.sendFile('login.html', {root: viewsDir});
// });
// app.post('/login_test', (req: Request, res: Response) => {
//     console.log('email', req.body.email);
//     console.log('password', req.body.password);
//     return res.json({id: 1});
// })

app.post('/login', (req: Request, res: Response))

// app.post('/api/auth/login')

// Users page
app.get('/users', (req: Request, res: Response) => {
    const jwt = req.signedCookies[cookieProps.key];
    if (!jwt) {
        return res.redirect('/');
    } else {
        return res.sendFile('users.html', {root: viewsDir});
    }
});

// Chat page
app.get('/chat', (req: Request, res: Response) => {
    const jwt = req.signedCookies[cookieProps.key];
    if (!jwt) {
        return res.redirect('/');
    } else {
        return res.sendFile('chat.html', {root: viewsDir});
    }
});



/************************************************************************************
 *                                   Setup Socket.io
 * Tutorial used for this: https://www.valentinog.com/blog/socket-react/
 ***********************************************************************************/

const server = http.createServer(app);
const io = new SocketIo(server);

io.sockets.on('connect', () => {
    return app.set('socketio', io);
});



/************************************************************************************
 *                              Export Server
 ***********************************************************************************/

export default server;