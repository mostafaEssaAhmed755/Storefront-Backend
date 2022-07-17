import supertest from 'supertest';
import db from '../../../config/database';
import helpers from '../../../helpers';
import app from '../../../index';
import userModel from '../../../models/user';
import userType from '../../../types/user';

const request = supertest(app);

describe('test user end points from admin 📦', () => {
	const user: userType = {
		email: 'mostafa.essa@gmail.com',
		password: helpers.hashPassword('mdark755'),
		first_name: 'mostafa',
		last_name: 'essa',
		address: 'qina qous',
		age: 23,
		gender: 'male',
	};

	let token = '';

	beforeAll(async () => {
		try {
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
			connect.release();
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	it('create new user ✅', async () => {
		const res = await request
			.post('/api/admin/users')
			.set('Content-type', 'application/json')
			.set('Authorization', `Bearer ${token}`)
			.send(user);

		user.id = res.body.data.id;

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBeDefined();
	});

	it('show all user ✅', async () => {
		const res = await request
			.get('/api/admin/users/')
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.length).toEqual(2);
	});

	it('show user ✅', async () => {
		const res = await request
			.get(`/api/admin/users/${user.id}`)
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBe(user.id);
	});

	it('update user ✅', async () => {
		const res = await request
			.patch(`/api/admin/users/${user.id}`)
			.set('Content-type', 'application/json')
			.set('Authorization', `Bearer ${token}`)
			.send({
				first_name: 'ahmed',
				last_name: 'hassan',
			});

		expect(res.status).toBe(200);
		expect(res.body.data.first_name).toBe('ahmed');
		expect(res.body.data.last_name).toBe('hassan');
	});

	it('delete user ✅', async () => {
		const res = await request
			.delete(`/api/admin/users/${user.id}`)
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBe(user.id);
	});
});
