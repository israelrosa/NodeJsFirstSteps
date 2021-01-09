import IUsersDataDTO from 'modules/users/interfaces/IUsersDataDTO';

import IUsersRepository from 'modules/users/interfaces/IUsersRepository';
import AppError from 'server/error/AppError';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

export default class UsersRepository implements IUsersRepository {
  ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async create({ lastname, name }: IUsersDataDTO): Promise<User> {
    const data = await this.ormRepository.create({ lastname, name });

    await this.ormRepository.save(data);

    return data;
  }

  async delete(id: string): Promise<number> {
    const result = await this.ormRepository.delete(id);

    if (result.affected) {
      return result.affected;
    }
    throw new AppError('Não foi possível deletar o usuário.');
  }

  async findAll(): Promise<User[]> {
    const data = await this.ormRepository.find();

    return data;
  }

  async findById(id: string): Promise<User | undefined> {
    const data = await this.ormRepository.findOne(id);

    return data;
  }

  async update(user: User): Promise<User> {
    const data = await this.ormRepository.save(user);

    return data;
  }
}
