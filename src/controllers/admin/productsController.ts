import { NextFunction, Request, Response } from 'express';

import productModel from '../../models/product';

import productType from '../../types/product';

class productsController {
	public async index(req: Request, res: Response, next: NextFunction) {
		try {
			const products: productType[] = await productModel.all();
			res.status(200).json({
				status: 'success',
				data: products,
				message: 'get all products  successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async show(req: Request, res: Response, next: NextFunction) {
		try {
			const product: productType = await productModel.findById(
				req.params.id
			);
			res.status(200).json({
				status: 'success',
				data: product,
				message: 'get product successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async create(req: Request, res: Response, next: NextFunction) {
		try {
			const product: productType = await productModel.create(req.body);

			res.status(200).json({
				status: 'success',
				data: product,
				message: 'created product successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async update(req: Request, res: Response, next: NextFunction) {
		try {
			const product = await productModel.update(req.params.id, req.body);
			res.status(200).json({
				status: 'success',
				data: product,
				message: 'updated product successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async delete(req: Request, res: Response, next: NextFunction) {
		try {
			const product = await productModel.delete(req.params.id);
			res.status(200).json({
				status: 'success',
				data: product,
				message: 'deleted product successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new productsController();
