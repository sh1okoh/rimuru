import bcrypt from 'bcrypt';
import UserDao from '../daos/User/UserDao.mock';
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';

const userDao = new UserDao();
const { BAD_REQUEST, OK, UNAUTHORIZED } = StatusCodes;

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!(email && password)) {
    return res.status(BAD_REQUEST).json();
  };

  const user = await userDao.findByEmail(email);
  if (!user) {
    return res.status(UNAUTHORIZED).json();
  }

  const pwdPassed = await bcrypt.compare(password, user.pwdHash);
  if (!pwdPassed) {
    return res.status(UNAUTHORIZED).json();
  }

  return res.status(OK).end();
}

export async function logout(req: Request, res: Response) {
  return res.status(OK).end();
}