import supertest from 'supertest';
import db from '../../../config/database';
import app from '../../../index';
import categoryModel from '../../../models/category';
import productModel from '../../../models/product';
import categoryType from '../../../types/category';
import productType from '../../../types/product';

const request = supertest(app);

describe('test product end points from frontend 📦', () => {
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
			// create category
			const cat: categoryType = await categoryModel.create(category);
			// add category.id to product.category_id and category.id
			product.category_id = category.id = cat.id;
			// create product
			const pro = await productModel.create(product);
			// add product.id to product.id
			product.id = pro.id;
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	afterAll(async () => {
		try {
			const connect = await db.connect();
			await connect.query('DELETE FROM products');
			await connect.query('DELETE FROM categories');
			connect.release();
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	it('show all product ✅', async () => {
		const res = await request.get('/api/products/');

		expect(res.status).toBe(200);
		expect(res.body.data.length).toEqual(1);
	});

	it('show product ✅', async () => {
		const res = await request.get(`/api/products/${product.id}`);

		expect(res.status).toBe(200);
		expect(res.body.data.id).toBe(product.id);
	});
});
