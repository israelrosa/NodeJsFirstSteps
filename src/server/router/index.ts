import { Router } from 'express';
import usersRouter from '../../modules/users/infra/router';

const router = Router();

router.use('/users', usersRouter);

export default router;
