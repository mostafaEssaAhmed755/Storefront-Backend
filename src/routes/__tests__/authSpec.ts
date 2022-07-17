import supertest from 'supertest';
import app from '../../index';
import db from '../../config/database';
import userType from '../../types/user';

const request = supertest(app);

describe('test auth users end points', () => {
	const user: userType = {
		email: 'mostafa.essa.ahmed755@gmail.com',
		password: 'mdark755',
		first_name: 'mostafa',
		last_name: 'essa',
		address: 'qina qous',
		age: 23,
		gender: 'male',
	};

	afterAll(async () => {
		try {
			const connect = await db.connect();
			await connect.query('DELETE FROM users');
			connect.release();
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	it('register new user', async () => {
		const res = await request
			.post('/register')
			.set('Content-type', 'application/json')
			.send(user);
		user.id = res.body.data.id;
		expect(res.status).toBe(200);
		expect(res.body.data.token).toBeDefined();
	});

	it('login user', async () => {
		const res = await request
			.post('/login')
			.set('Content-type', 'application/json')
			.send({ email: user.email, password: user.password });

		expect(res.status).toBe(200);
		expect(res.body.data.token).toBeDefined();
	});
});
