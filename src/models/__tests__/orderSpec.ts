import db from '../../config/database';
import orderModel from '../order';
import userModel from '../user';
import orderType from '../../types/order';
import userType from '../../types/user';
import helpers from '../../helpers';

describe('test orderModel functions 📦', () => {
	let user: userType;

	beforeAll(async () => {
		user = await userModel.create({
			email: 'mostafa.essa.ahmed755@gmail.com',
			password: helpers.hashPassword('mostafa755'),
			first_name: 'mostafa',
			last_name: 'essa',
			address: 'qina qous',
			age: 23,
			gender: 'male',
		});
	});

	afterAll(async () => {
		try {
			const connect = await db.connect();
			await connect.query('DELETE FROM orders');
			await connect.query('DELETE FROM users');
			connect.release();
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	describe('define functions 📋', () => {
		it('The (all) function has been defined ✅', () => {
			expect(orderModel.all).toBeDefined();
		});
		it('The (findById) function has been defined ✅', () => {
			expect(orderModel.findById).toBeDefined();
		});
		it('The (create) function has been defined ✅', () => {
			expect(orderModel.create).toBeDefined();
		});
		it('The (update) function has been defined ✅', () => {
			expect(orderModel.update).toBeDefined();
		});
		it('The (delete) function has been defined ✅', () => {
			expect(orderModel.delete).toBeDefined();
		});
	});

	describe('Test functions with correct data 📋', () => {
		let order: orderType;

		it('the (create) function working properly ✅', async () => {
			order = await orderModel.create({
				total_price: 50,
				user_id: user.id,
			});

			expect(order.id).toBeDefined();
		});

		it('the (all) function working properly ✅', async () => {
			const res: orderType[] = await orderModel.all();

			expect(res.length).toBe(1);
		});

		it('the (findeById) function working properly ✅', async () => {
			const res: orderType = await orderModel.findById(
				order.id as string
			);

			expect(res.id).toBe(order.id);
			expect(res.total_price).toBe(order.total_price);
			expect(res.user_id).toBe(order.user_id);
		});

		it('the (update) function working properly ✅', async () => {
			const updatedData = {
				status: 'completed',
			};

			const res = await orderModel.update(
				order.id as string,
				updatedData
			);

			expect(res.status).toBe(updatedData.status);
		});

		it('the (delete) function working properly ✅', async () => {
			const res: orderType = await orderModel.delete(order.id as string);
			expect(res.id).toBe(order.id);
		});
	});
});
