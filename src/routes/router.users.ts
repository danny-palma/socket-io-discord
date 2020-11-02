import { Router } from 'express';
import { login, renderLogin } from '../controllers/controller.users';

const router = Router();

router.route('/login')
    .get(renderLogin)
    .post(login);

export default router;
