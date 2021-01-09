import { Router } from 'express';
import UsersController from '../controller/UsersController';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/', usersController.show);

usersRouter.post('/', usersController.create);

export default usersRouter;
