import supertest from 'supertest';
import db from '../../../config/database';
import helpers from '../../../helpers';
import app from '../../../index';
import userModel from '../../../models/user';
import categoryType from '../../../types/category';
import userType from '../../../types/user';

const request = supertest(app);

describe('test category end points from admin 📦', () => {
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

	beforeAll(async () => {
		try {
			const res = await userModel.create(userAdmin);

			token = helpers.generateToken(res);
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	afterAll(async () => {
		try {
			const connect = await db.connect();
			await connect.query('DELETE FROM users');
			await connect.query('DELETE FROM categories');
			connect.release();
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	it('create new category ✅', async () => {
		const res = await request
			.post('/api/admin/categories')
			.set('Content-type', 'application/json')
			.set('Authorization', `Bearer ${token}`)
			.send(category);

		category.id = res.body.data.id;

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBeDefined();
	});

	it('show all categories ✅', async () => {
		const res = await request
			.get('/api/admin/categories/')
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.length).toEqual(1);
	});

	it('show category ✅', async () => {
		const res = await request
			.get(`/api/admin/categories/${category.id}`)
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBe(category.id);
	});

	it('update category ✅', async () => {
		const updatedCategory = {
			name: 'cats',
		};
		const res = await request
			.patch(`/api/admin/categories/${category.id}`)
			.set('Content-type', 'application/json')
			.set('Authorization', `Bearer ${token}`)
			.send(updatedCategory);

		expect(res.status).toBe(200);
		expect(res.body.data.name).toBe(updatedCategory.name);
	});

	it('delete category ✅', async () => {
		const res = await request
			.delete(`/api/admin/categories/${category.id}`)
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBe(category.id);
	});
});
