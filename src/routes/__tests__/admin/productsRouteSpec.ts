import supertest from 'supertest';
import db from '../../../config/database';
import helpers from '../../../helpers';
import app from '../../../index';
import userModel from '../../../models/user';
import categoryModel from '../../../models/category';
import categoryType from '../../../types/category';
import userType from '../../../types/user';
import productType from '../../../types/product';

const request = supertest(app);

describe('test product end points from admin 📦', () => {
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

	beforeAll(async () => {
		try {
			const res = await userModel.create(userAdmin);

			token = helpers.generateToken(res);

			const cat: categoryType = await categoryModel.create(category);

			product.category_id = category.id = cat.id;
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	afterAll(async () => {
		try {
			const connect = await db.connect();
			await connect.query('DELETE FROM users');
			await connect.query('DELETE FROM products');
			await connect.query('DELETE FROM categories');
			connect.release();
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	it('create new product ✅', async () => {
		const res = await request
			.post('/api/admin/products')
			.set('Content-type', 'application/json')
			.set('Authorization', `Bearer ${token}`)
			.send(product);

		product.id = res.body.data.id;

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBeDefined();
	});

	it('show all product ✅', async () => {
		const res = await request
			.get('/api/admin/products/')
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.length).toEqual(1);
	});

	it('show product ✅', async () => {
		const res = await request
			.get(`/api/admin/products/${product.id}`)
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBe(product.id);
	});

	it('update product ✅', async () => {
		const updatedProduct = {
			name: 'cat',
			price: '10.00',
		};
		const res = await request
			.patch(`/api/admin/products/${product.id}`)
			.set('Content-type', 'application/json')
			.set('Authorization', `Bearer ${token}`)
			.send(updatedProduct);

		expect(res.status).toBe(200);
		expect(res.body.data.name).toBe(updatedProduct.name);
		expect(res.body.data.price).toBe(updatedProduct.price);
	});

	it('delete product ✅', async () => {
		const res = await request
			.delete(`/api/admin/products/${product.id}`)
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBe(product.id);
	});
});
