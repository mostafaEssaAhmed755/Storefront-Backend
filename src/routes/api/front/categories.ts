import { Router } from 'express';
import categoriesController from '../../../controllers/front/categoriesController';

const routes = Router();

routes.route('/').get(categoriesController.index);

routes.route('/:id').get(categoriesController.show);

export default routes;
