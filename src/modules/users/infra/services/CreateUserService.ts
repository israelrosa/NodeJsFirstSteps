import IUsersDataDTO from 'modules/users/interfaces/IUsersDataDTO';
import IUsersRepository from 'modules/users/interfaces/IUsersRepository';
import AppError from 'server/error/AppError';
import User from '../typeorm/entities/User';

export default class CreateUserService {
  usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ lastname, name }: IUsersDataDTO): Promise<User> {
    if (name.length > 10) {
      throw new AppError('Nome muito grande.');
    }

    const result = await this.usersRepository.create({ lastname, name });

    return result;
  }
}
