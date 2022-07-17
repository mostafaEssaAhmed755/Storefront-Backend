import db from '../../config/database';
import orderItemModel from '../orderItem';
import orderModel from '../order';
import userModel from '../user';
import categoryModel from '../category';
import productModel from '../product';
import orderType from '../../types/order';
import userType from '../../types/user';
import productType from '../../types/product';
import categoryType from '../../types/category';
import helpers from '../../helpers';
import orderItemType from '../../types/orderItem';

describe('test orderItemModel functions 📦', () => {
	let user: userType;
	let order: orderType;
	let product: productType;
	let category: categoryType;

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

		category = await categoryModel.create({
			name: 'category_one',
			image: 'https://placekitten.com/200/300',
		});

		product = await productModel.create({
			name: 'product_one',
			price: 15,
			description: 'description for this product',
			image: 'https://placekitten.com/200/300',
			quantity: 50,
			category_id: category.id,
		});

		order = await orderModel.create({
			total_price: 50,
			user_id: user.id,
		});
	});

	afterAll(async () => {
		try {
			const connect = await db.connect();
			await connect.query('DELETE FROM order_items');
			await connect.query('DELETE FROM orders');
			await connect.query('DELETE FROM products');
			await connect.query('DELETE FROM categories');
			await connect.query('DELETE FROM users');
			connect.release();
		} catch (error) {
			throw new Error((error as Error).message);
		}
	});

	describe('define functions 📋', () => {
		it('The (all) function has been defined ✅', () => {
			expect(orderItemModel.all).toBeDefined();
		});
		it('The (findById) function has been defined ✅', () => {
			expect(orderItemModel.findById).toBeDefined();
		});
		it('The (create) function has been defined ✅', () => {
			expect(orderItemModel.create).toBeDefined();
		});
		it('The (update) function has been defined ✅', () => {
			expect(orderItemModel.update).toBeDefined();
		});
		it('The (delete) function has been defined ✅', () => {
			expect(orderItemModel.delete).toBeDefined();
		});
	});

	describe('Test functions with correct data 📋', () => {
		let orderItem: orderItemType;

		it('the (create) function working properly ✅', async () => {
			orderItem = await orderItemModel.create({
				price: product.price,
				quantity: 10,
				order_id: order.id,
				product_id: product.id,
			});

			expect(orderItem.id).toBeDefined();
		});

		it('the (all) function working properly ✅', async () => {
			const res: orderItemType[] = await orderItemModel.all();

			expect(res.length).toBe(1);
		});

		it('the (findeById) function working properly ✅', async () => {
			const res: orderItemType = await orderItemModel.findById(
				orderItem.id as string
			);

			expect(res.id).toBe(orderItem.id);
			expect(res.order_id).toBe(orderItem.order_id);
			expect(res.product_id).toBe(orderItem.product_id);
		});

		it('the (update) function working properly ✅', async () => {
			const updatedData: orderItemType = {
				quantity: 5,
			};

			const res = await orderItemModel.update(
				orderItem.id as string,
				updatedData
			);

			expect(res.quantity).toBe(updatedData.quantity);
		});

		it('the (delete) function working properly ✅', async () => {
			const res: orderItemType = await orderItemModel.delete(
				orderItem.id as string
			);
			expect(res.id).toBe(orderItem.id);
		});
	});
});
