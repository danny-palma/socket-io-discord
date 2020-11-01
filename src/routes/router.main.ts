import { Router } from 'express';
import { indexWelcome } from '../controllers/controller.main';

const router = Router();

router.route('/')
    .get(indexWelcome);

export default router;
