import supertest from 'supertest';
import db from '../../../config/database';
import app from '../../../index';
import categoryModel from '../../../models/category';
import categoryType from '../../../types/category';

const request = supertest(app);

describe('test categories end points from frontend 📦', () => {
	// category
	const category: categoryType = {
		name: 'category_one',
		image: 'https://placekitten.com/200/300',
	};
	beforeAll(async () => {
		try {
			// create category
			const cat: categoryType = await categoryModel.create(category);
			// add cat.id to category.id
			category.id = cat.id;
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	afterAll(async () => {
		try {
			const connect = await db.connect();
			await connect.query('DELETE FROM categories');
			connect.release();
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	it('show all categories ✅', async () => {
		const res = await request.get('/api/categories/');

		expect(res.status).toBe(200);
		expect(res.body.data.length).toEqual(1);
	});

	it('show category ✅', async () => {
		const res = await request.get(`/api/categories/${category.id}`);

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBe(category.id);
	});
});
