import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('test basic end point', () => {
	it('test GET / end point', async () => {
		const response = await request.get('/');
		expect(response.status).toBe(200);
	});
});