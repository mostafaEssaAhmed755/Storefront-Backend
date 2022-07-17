import { Router } from 'express';
import ordersController from '../../../controllers/front/ordersController';
import auth from '../../../middlewares/authMiddleware';

const routes = Router();

routes
	.route('/')
	.get([auth], ordersController.index)
	.post([auth], ordersController.create);

routes.route('/:id').get([auth], ordersController.show);

export default routes;
