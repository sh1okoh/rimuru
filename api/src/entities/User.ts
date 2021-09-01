export enum UserRoles {
  Standard,
  Admin,
}

export interface User {
  id: number;
  name: string;
  email: string;
  pwdHash: string;
  role: UserRoles;
}