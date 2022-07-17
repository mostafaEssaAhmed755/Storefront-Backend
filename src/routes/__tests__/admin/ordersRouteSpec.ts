import supertest from 'supertest';
import db from '../../../config/database';
import helpers from '../../../helpers';
import app from '../../../index';
import userModel from '../../../models/user';
import categoryModel from '../../../models/category';
import productModel from '../../../models/product';
import categoryType from '../../../types/category';
import userType from '../../../types/user';
import productType from '../../../types/product';
import orderType from '../../../types/order';

const request = supertest(app);

describe('test orders end points from admin 📦', () => {
	// admin
	const userAdmin: userType = {
		email: 'mostafa.essa.ahmed755@gmail.com',
		password: helpers.hashPassword('mdark755'),
		first_name: 'mostafa',
		last_name: 'essa',
		address: 'qina qous',
		age: 23,
		gender: 'male',
		is_admin: true,
	};
	// token
	let token: string;
	// category
	const category: categoryType = {
		name: 'category_one',
		image: 'https://placekitten.com/200/300',
	};
	// product
	const product: productType = {
		name: 'product_one',
		price: 15,
		description: 'description for this product',
		image: 'https://placekitten.com/200/300',
		quantity: 50,
	};
	// orders
	let order: orderType;
	// request order items
	let requestOrder: {
		user_id: string;
		items: { id: string; quantity: number }[];
	};
	beforeAll(async () => {
		try {
			const user: userType = await userModel.create(userAdmin);
			token = helpers.generateToken(user);
			userAdmin.id = user.id;

			const cat: categoryType = await categoryModel.create(category);
			product.category_id = category.id = cat.id;

			const pro: productType = await productModel.create(product);
			product.id = pro.id as string;

			requestOrder = {
				user_id: userAdmin.id as string,
				items: [{ id: pro.id as string, quantity: 20 }],
			};
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	afterAll(async () => {
		try {
			const connect = await db.connect();
			await connect.query('DELETE FROM order_items');
			await connect.query('DELETE FROM orders');
			await connect.query('DELETE FROM users');
			await connect.query('DELETE FROM products');
			await connect.query('DELETE FROM categories');
			connect.release();
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	it('create new order ✅', async () => {
		const res = await request
			.post('/api/admin/orders')
			.set('Content-type', 'application/json')
			.set('Authorization', `Bearer ${token}`)
			.send(requestOrder);

		order = { id: res.body.data.id };

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBeDefined();
		expect(res.body.data.status).toBe('pending');
		expect(res.body.data.user_id).toEqual(userAdmin.id);
		expect(res.body.data.total_price).toEqual('300.00');
		expect(res.body.data.items.length).toEqual(1);
	});

	it('show all orders ✅', async () => {
		const res = await request
			.get('/api/admin/orders/')
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.length).toEqual(1);
	});

	it('show order ✅', async () => {
		const res = await request
			.get(`/api/admin/orders/${order.id}`)
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBe(order.id);
	});

	it('update order ✅', async () => {
		const updatedOrder: orderType = {
			status: 'completed',
		};
		const res = await request
			.patch(`/api/admin/orders/${order.id}`)
			.set('Content-type', 'application/json')
			.set('Authorization', `Bearer ${token}`)
			.send(updatedOrder);

		expect(res.status).toBe(200);
		expect(res.body.data.status).toBe(updatedOrder.status);
	});

	it('delete order ✅', async () => {
		const res = await request
			.delete(`/api/admin/orders/${order.id}`)
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBe(order.id);
	});
});
