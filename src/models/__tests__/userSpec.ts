import userModel from '../user';
import userType from '../../types/user';
import helpers from '../../helpers';
import db from '../../config/database';

describe('test userModel functions 📦', () => {
	afterAll(async () => {
		try {
			const connect = await db.connect();
			await connect.query('DELETE FROM users');
			connect.release();
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	describe('define functions 📋', () => {
		it('The (all) function has been defined ✅', () => {
			expect(userModel.all).toBeDefined();
		});
		it('The (findById) function has been defined ✅', () => {
			expect(userModel.findById).toBeDefined();
		});
		it('The (create) function has been defined ✅', () => {
			expect(userModel.create).toBeDefined();
		});
		it('The (update) function has been defined ✅', () => {
			expect(userModel.update).toBeDefined();
		});
		it('The (delete) function has been defined ✅', () => {
			expect(userModel.delete).toBeDefined();
		});
		it('The (attempt) function has been defined ✅', () => {
			expect(userModel.attempt).toBeDefined();
		});
	});

	describe('Test functions with correct data 📋', () => {
		let user: userType;

		it('the (create) function working properly ✅', async () => {
			user = await userModel.create({
				email: 'mostafa.essa.ahmed755@gmail.com',
				password: helpers.hashPassword('mostafa755'),
				first_name: 'mostafa',
				last_name: 'essa',
				address: 'qina qous',
				age: 23,
				gender: 'male',
			});

			expect(user.email).toBe('mostafa.essa.ahmed755@gmail.com');
		});

		it('The (attempt) function working properly ✅', async () => {
			const res: userType = await userModel.attempt(
				user.email as string,
				'mostafa755'
			);
			expect(res.email).toBe(user.email);
		});

		it('the (all) function working properly ✅', async () => {
			const res: userType[] = await userModel.all();

			expect(res.length).toBe(1);
		});

		it('the (findeById) function working properly ✅', async () => {
			const res: userType = await userModel.findById(user.id as string);

			expect(res.id).toBe(user.id);
			expect(res.email).toBe(user.email);
		});

		it('the (update) function working properly ✅', async () => {
			const updatedData = {
				first_name: 'ahmed',
				last_name: 'hassan',
			};

			const res = await userModel.update(user.id as string, updatedData);

			expect(res.first_name).toBe(updatedData.first_name);
			expect(res.last_name).toBe(updatedData.last_name);
		});

		it('the (delete) function working properly ✅', async () => {
			const res: userType = await userModel.delete(user.id as string);

			expect(res.id).toBe(user.id);
		});
	});
});
