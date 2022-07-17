import categoryModel from '../category';
import categoryType from '../../types/category';
import db from '../../config/database';

describe('test categoryModel functions 📦', () => {
	afterAll(async () => {
		try {
			const connect = await db.connect();
			await connect.query('DELETE FROM categories');
			connect.release();
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	describe('define functions 📋', () => {
		it('The (all) function has been defined ✅', () => {
			expect(categoryModel.all).toBeDefined();
		});
		it('The (findById) function has been defined ✅', () => {
			expect(categoryModel.findById).toBeDefined();
		});
		it('The (create) function has been defined ✅', () => {
			expect(categoryModel.create).toBeDefined();
		});
		it('The (update) function has been defined ✅', () => {
			expect(categoryModel.update).toBeDefined();
		});
		it('The (delete) function has been defined ✅', () => {
			expect(categoryModel.delete).toBeDefined();
		});
	});

	describe('Test functions with correct data 📋', () => {
		const category: categoryType = {
			name: 'category_one',
			image: 'https://placekitten.com/200/300',
		};

		it('the (create) function working properly ✅', async () => {
			const res = await categoryModel.create(category);

			category.id = res.id;

			expect(res.name).toBe(category.name);
			expect(res.image).toBe(category.image);
		});

		it('the (all) function working properly ✅', async () => {
			const res: categoryType[] = await categoryModel.all();

			expect(res.length).toBe(1);
		});

		it('the (findeById) function working properly ✅', async () => {
			const res: categoryType = await categoryModel.findById(
				category.id as string
			);

			expect(res.id).toBe(category.id);
			expect(res.name).toBe(category.name);
			expect(res.image).toBe(category.image);
		});

		it('the (update) function working properly ✅', async () => {
			const updatedData = {
				name: 'category_changed',
				image: 'https://placekitten.com/600/600',
			};
			const res = await categoryModel.update(
				category.id as string,
				updatedData
			);

			expect(res.name).toBe(updatedData.name);
			expect(res.image).toBe(updatedData.image);
		});

		it('the (delete) function working properly ✅', async () => {
			const res: categoryType = await categoryModel.delete(
				category.id as string
			);
			expect(res.id).toBe(category.id);
		});
	});
});
