import { Router } from 'express';
import { indexWelcome } from '../controllers/controller.main';
import { isLogged } from "../controllers/controller.isloged";

const router = Router();

router.route('/')
    .get(isLogged, indexWelcome);

export default router;
