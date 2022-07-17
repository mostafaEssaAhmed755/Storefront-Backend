import { Router } from 'express';
import productsController from '../../../controllers/admin/productsController';
import auth from '../../../middlewares/authMiddleware';
import isAdmin from '../../../middlewares/isAdminMiddleware';

const routes = Router();

routes
	.route('/')
	.get([auth, isAdmin], productsController.index)
	.post([auth, isAdmin], productsController.create);
routes
	.route('/:id')
	.get([auth, isAdmin], productsController.show)
	.patch([auth, isAdmin], productsController.update)
	.delete([auth, isAdmin], productsController.delete);

export default routes;
