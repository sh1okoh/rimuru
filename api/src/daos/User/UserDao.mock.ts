import { IUser } from '../../entities/User';
import { getRandomInt } from '../../shared/functions';
import { IUserDao } from './UserDao';
import MockDaoMock from '../MockDb/MockDao.mock';

class UserDao extends MockDaoMock implements IUserDao {

    public async findByEmail(email: string): Promise<IUser | null> {
        const db = await super.openDb();
        const result = db.users.filter(user => user.email === email)[0];
        return result ?? null;
    }

    public async findAll(): Promise<IUser[]> {
        const db = await super.openDb();
        return db.users;
    }

    public async add(user: IUser): Promise<void> {
        const db = await super.openDb();
        user.id = getRandomInt();
        db.users.push(user);
        await super.saveDb(db);
    }

    public async update(user: IUser): Promise<void> {
        const db = await super.openDb();
        db.users.forEach(async (v, idx) => {
            if (v.id === user.id) {
                db.users[idx] = user;
                await super.saveDb(db);
                return;
            }
        });
        throw new Error('User not found');
    }


    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        db.users.forEach(async (v, idx) => {
            if (v.id === id) {
                db.users.slice(idx, 1);
                await super.saveDb(db);
                return;
            }
        })
        throw new Error('User not found');
    }
}

export default UserDao;
