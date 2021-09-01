export enum UserRoles {
  Standard,
  Admin,
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  pwdHash: string;
  role: UserRoles;
}