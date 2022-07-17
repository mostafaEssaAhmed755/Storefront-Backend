import db from '../../config/database';
import productModel from '../product';
import categoryModel from '../category';
import productType from '../../types/product';
import categoryType from '../../types/category';

describe('test productModel functions 📦', () => {
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

	describe('define functions 📋', () => {
		it('The (all) function has been defined ✅', () => {
			expect(productModel.all).toBeDefined();
		});
		it('The (findById) function has been defined ✅', () => {
			expect(productModel.findById).toBeDefined();
		});
		it('The (create) function has been defined ✅', () => {
			expect(productModel.create).toBeDefined();
		});
		it('The (update) function has been defined ✅', () => {
			expect(productModel.update).toBeDefined();
		});
		it('The (delete) function has been defined ✅', () => {
			expect(productModel.delete).toBeDefined();
		});
	});

	describe('Test functions with correct data 📋', () => {
		const product: productType = {
			name: 'product_one',
			price: 15,
			description: 'description for this product',
			image: 'https://placekitten.com/200/300',
			quantity: 50,
		};

		beforeAll(async () => {
			try {
				const category: categoryType = await categoryModel.create({
					name: 'category_one',
					image: 'https://placekitten.com/200/300',
				});

				product.category_id = category.id as string;
			} catch (error) {
				throw new Error((error as Error).message);
			}
		});

		it('the (create) function working properly ✅', async () => {
			const res = await productModel.create(product);

			product.id = res.id;

			expect(res.name).toBe(product.name);
			expect(res.price).toBe('15.00' as unknown as number);
		});

		it('the (all) function working properly ✅', async () => {
			const res: productType[] = await productModel.all();

			expect(res.length).toBe(1);
		});

		it('the (findeById) function working properly ✅', async () => {
			const res: productType = await productModel.findById(
				product.id as string
			);

			expect(res.id).toBe(product.id);
			expect(res.name).toBe(product.name);
			expect(res.price).toBe('15.00' as unknown as number);
		});

		it('the (update) function working properly ✅', async () => {
			const updatedData = {
				name: 'product_changed',
				price: 20,
			};
			const res = await productModel.update(
				product.id as string,
				updatedData
			);

			expect(res.name).toBe(updatedData.name);
			expect(res.price).toBe('20.00' as unknown as number);
		});

		it('the (delete) function working properly ✅', async () => {
			const res: productType = await productModel.delete(
				product.id as string
			);
			expect(res.id).toBe(product.id);
		});
	});
});
