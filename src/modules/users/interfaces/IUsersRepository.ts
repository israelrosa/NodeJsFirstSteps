import User from '../infra/typeorm/entities/User';
import IUsersDataDTO from './IUsersDataDTO';

export default interface IUsersRepository {
  create(data: IUsersDataDTO): Promise<User>;
  findById(id: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  delete(id: string): Promise<number>;
  update(user: User): Promise<User>;
}
