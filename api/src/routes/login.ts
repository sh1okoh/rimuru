import { User } from 'src/entities/User';
export interface Request  {
  body: {
      user: User;
      email: string;
      password: string;
      message: string;
      socketId: string;
  };
}

export interface Response {
  sessionUser: any
}


export async function login(req: Request, res: Response) {

}