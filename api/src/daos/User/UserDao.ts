import { IUser } from '../../entities/User';

export interface IUserDao {
  findByEmail: (email: string) => Promise<IUser | null>;
  findAll: () => Promise<IUser[]>;
  add: (user: IUser) => Promise<void>;
  update: (user: IUser) => Promise<void>;
  delete: (id: number) => Promise<void>;
}

class UserDao implements IUserDao {

  // TODO: 内部実装
  public findByEmail(email: string): Promise<IUser | null> {
    return Promise.resolve(null);
  }

  // TODO: 内部実装
  public findAll(): Promise<IUser[]> {
    return Promise.resolve([]);
  }

  // TODO: 内部実装
  public add(user: IUser): Promise<void> {
    return Promise.resolve();
  }

  // TODO: 内部実装
  public update(user: IUser): Promise<void> {
    return Promise.resolve();
  }

  // TODO: 内部実装
  public delete(id: number): Promise<void> {
    return Promise.resolve();
  } 
}

export default UserDao;
