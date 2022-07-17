import { Router } from 'express';
import usersController from '../../../controllers/front/usersController';
import auth from '../../../middlewares/authMiddleware';

const routes = Router();

routes
	.route('/')
	.get([auth], usersController.show)
	.patch([auth], usersController.update);

export default routes;
