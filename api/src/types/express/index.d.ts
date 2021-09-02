import { IUser } from 'entities/User';

declare module 'express' {
  export interface Request  {
      body: {
          user: IUser
          email: string;
          password: string;
          message: string;
          socketId: string;
      };
  }
}

// declare global {
//   namespace Express {
//       export interface Response {
//           sessionUser: IClientData;
//       }
//   }
// }