import { NextFunction, Request, Response } from 'express';
import categoryModel from '../../models/category';

class categoriesController {
	public async index(req: Request, res: Response, next: NextFunction) {
		try {
			const category = await categoryModel.all();
			res.status(200).json({
				status: 'success',
				data: category,
				message: 'get all categories  successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async show(req: Request, res: Response, next: NextFunction) {
		try {
			const category = await categoryModel.findById(req.params.id);
			res.status(200).json({
				status: 'success',
				data: category,
				message: 'get category successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new categoriesController();
