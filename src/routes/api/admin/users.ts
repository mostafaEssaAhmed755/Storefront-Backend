import { Router } from 'express';
import usersController from '../../../controllers/admin/usersController';
import auth from '../../../middlewares/authMiddleware';
import isAdmin from '../../../middlewares/isAdminMiddleware';

const routes = Router();

routes
	.route('/')
	.get([auth, isAdmin], usersController.index)
	.post([auth, isAdmin], usersController.create);

routes
	.route('/:id')
	.get([auth, isAdmin], usersController.show)
	.patch([auth, isAdmin], usersController.update)
	.delete([auth, isAdmin], usersController.delete);

export default routes;
