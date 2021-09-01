import { StatusCodes } from 'http-status-codes';
import { IUser } from 'src/entities/User';

const { BAD_REQUEST } = StatusCodes;

export interface Request  {
  body: {
      user: IUser;
      email: string;
      password: string;
      message: string;
      socketId: string;
  };
}

export interface Response {
  sessionUser: any; 
}


export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!(email && password)) {
    return BAD_REQUEST;
  };

  
}