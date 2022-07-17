import { Router } from 'express';
import productsController from '../../../controllers/front/productsController';

const routes = Router();

routes.route('/').get(productsController.index);

routes.route('/:id').get(productsController.show);

export default routes;
