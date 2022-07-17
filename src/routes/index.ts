import { Request, Response, Router } from 'express';
// admin
import usersRouteAdmin from './api/admin/users';
import categoriesRouteAdmin from './api/admin/categories';
import productsRouteAdmin from './api/admin/products';
import ordersRouteAdmin from './api/admin/orders';
// front
import usersRoute from './api/front/users';
import categoriesRoute from './api/front/categories';
import productsRoute from './api/front/products';
import ordersRoute from './api/front/orders';
import auth from '../controllers/auth';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
	res.status(200).json({ status: 'success', message: 'Hello World' });
});

routes.post('/login', auth.login);
routes.post('/register', auth.register);

// remember to add middlewares here
// admin routes
routes.use('/api/admin/users', usersRouteAdmin);
routes.use('/api/admin/categories', categoriesRouteAdmin);
routes.use('/api/admin/products', productsRouteAdmin);
routes.use('/api/admin/orders', ordersRouteAdmin);
// front routes
routes.use('/api/profile', usersRoute);
routes.use('/api/categories', categoriesRoute);
routes.use('/api/products', productsRoute);
routes.use('/api/orders', ordersRoute);

export default routes;
