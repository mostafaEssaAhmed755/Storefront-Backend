import { Router } from 'express';
import ordersController from '../../../controllers/admin/ordersController';
import auth from '../../../middlewares/authMiddleware';
import isAdmin from '../../../middlewares/isAdminMiddleware';

const routes = Router();

routes
	.route('/')
	.get([auth, isAdmin], ordersController.index)
	.post([auth, isAdmin], ordersController.create);
routes
	.route('/:id')
	.get([auth, isAdmin], ordersController.show)
	.patch([auth, isAdmin], ordersController.update)
	.delete([auth, isAdmin], ordersController.delete);

export default routes;
