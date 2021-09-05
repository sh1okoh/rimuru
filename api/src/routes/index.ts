import { Router } from 'express';
import { login, logout } from './auth';


// login
const loginRouter = Router();
loginRouter.post('/login', login);
loginRouter.get('/logout', logout)

