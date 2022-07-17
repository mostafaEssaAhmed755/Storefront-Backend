import supertest from 'supertest';
import db from '../../../config/database';
import helpers from '../../../helpers';
import app from '../../../index';
import userModel from '../../../models/user';
import userType from '../../../types/user';

const request = supertest(app);

describe('test user end points from frontend 📦', () => {
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
			const res = await userModel.create(user);
			user.id = res.id;
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

	it('show user ✅', async () => {
		const res = await request
			.get('/api/profile')
			.set('Authorization', `Bearer ${token}`);

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBe(user.id);
	});

	it('update user ✅', async () => {
		const res = await request
			.patch('/api/profile')
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
});
