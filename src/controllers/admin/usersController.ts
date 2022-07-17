import { NextFunction, Request, Response } from 'express';
import userModel from '../../models/user';
import helpers from '../../helpers';

class usersController {
	public async index(req: Request, res: Response, next: NextFunction) {
		try {
			const users = await userModel.all();
			res.status(200).json({
				status: 'success',
				data: users,
				message: 'get all users successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async show(req: Request, res: Response, next: NextFunction) {
		try {
			const user = await userModel.findById(req.params.id);
			res.status(200).json({
				status: 'success',
				data: user,
				message: 'get user successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async create(req: Request, res: Response, next: NextFunction) {
		try {
			req.body.password = helpers.hashPassword(req.body.password);

			const user = await userModel.create(req.body);

			res.status(200).json({
				status: 'success',
				data: user,
				message: 'created user successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async update(req: Request, res: Response, next: NextFunction) {
		try {
			if (req.body.password) {
				req.body.password = helpers.hashPassword(req.body.password);
			}
			const user = await userModel.update(req.params.id, req.body);
			res.status(200).json({
				status: 'success',
				data: user,
				message: 'updated user successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async delete(req: Request, res: Response, next: NextFunction) {
		try {
			const user = await userModel.delete(req.params.id);
			res.status(200).json({
				status: 'success',
				data: user,
				message: 'deleted user successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new usersController();
