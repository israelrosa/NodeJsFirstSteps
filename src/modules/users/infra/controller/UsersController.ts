import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import UsersRepository from '../typeorm/repositories/UsersRepository';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, lastname } = req.body;

    const repository = new UsersRepository();

    const createUser = new CreateUserService(repository);

    const result = await createUser.execute({ lastname, name });

    return res.json(result);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    return res.json('ok');
  }
}
