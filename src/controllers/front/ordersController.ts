import { NextFunction, Request, Response } from 'express';
import helpers from '../../helpers';

import orderModel from '../../models/order';
import orderItemModel from '../../models/orderItem';
import productModel from '../../models/product';

import orderType from '../../types/order';
import orderItemType from '../../types/orderItem';
import productType from '../../types/product';
import userType from '../../types/user';

class ordersController {
	public async index(req: Request, res: Response, next: NextFunction) {
		try {
			// get auth user
			const auth: userType = helpers.auth(req);
			const orders: orderType[] = await orderModel.findBy({
				name: 'user_id',
				value: auth.id as string,
			});
			res.status(200).json({
				status: 'success',
				data: orders,
				message: 'get all orders  successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async show(req: Request, res: Response, next: NextFunction) {
		try {
			const order: orderType = await orderModel.findById(req.params.id);
			const items: orderItemType[] = await orderItemModel.findBy({
				name: 'order_id',
				value: order.id as string,
			});
			res.status(200).json({
				status: 'success',
				data: { ...order, items },
				message: 'get order successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async create(req: Request, res: Response, next: NextFunction) {
		try {
			/*
			1- get request: {user_id, items: [product_id,quantity]}
			2- validat the product (is product exists) && (is product have enought quantity)
			3- get product price and quantity from database
			4- calculate total price
			5- get auth user
			5- create order
			6- reduce products quantity from database
			7- create order items
			8- get created order and order items
			8- send response: {order, items}
			*/
			// get products and quantity first in array[]
			const productItems: {
				id?: string;
				quantity?: number;
				price?: number; // that price exists in database
				current_quantity?: number; // this quantity exists in database
			}[] = req.body.items;
			// check if all products exists and have enought quantity
			const prepared_products = productItems.map(async (item) => {
				// check if product exists
				const pro: productType = await productModel.findById(
					item.id as string
				);
				// check product quantity
				if (
					(pro.quantity as number) <
					(item.quantity as unknown as number)
				) {
					throw new Error('not enought quantity');
				}
				// get product price
				item.price = pro.price;
				// get product quantity
				item.current_quantity = pro.quantity;

				return item;
			});
			// calculate total price for product
			const total_price = (await Promise.all(prepared_products)).reduce(
				(total, item) => {
					return (
						total +
						parseFloat(item.price as unknown as string) *
							parseInt(item.quantity as unknown as string)
					);
				},
				0
			);
			const auth: userType = helpers.auth(req);
			// create order
			const order: orderType = await orderModel.create({
				user_id: auth.id,
				total_price: total_price,
			});
			// create orderItem and reduce quantity
			const items = (await Promise.all(prepared_products)).map(
				async (item) => {
					// reduce quantity
					const quantity =
						parseInt(item.current_quantity as unknown as string) -
						parseInt(item.quantity as unknown as string);
					// update product quantity
					await productModel.update(item.id as string, {
						quantity: quantity,
					});
					// create product to order
					return await orderItemModel.create({
						order_id: order.id,
						product_id: item.id,
						quantity: item.quantity,
						price: item.price,
					});
				}
			);

			res.status(200).json({
				status: 'success',
				data: { ...order, items: items },
				message: 'created order successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new ordersController();
