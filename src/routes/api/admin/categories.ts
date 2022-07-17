import { Router } from 'express';
import categoriesController from '../../../controllers/admin/categoriesController';
import auth from '../../../middlewares/authMiddleware';
import isAdmin from '../../../middlewares/isAdminMiddleware';

const routes = Router();

routes
	.route('/')
	.get([auth, isAdmin], categoriesController.index)
	.post([auth, isAdmin], categoriesController.create);
routes
	.route('/:id')
	.get([auth, isAdmin], categoriesController.show)
	.patch([auth, isAdmin], categoriesController.update)
	.delete([auth, isAdmin], categoriesController.delete);

export default routes;
