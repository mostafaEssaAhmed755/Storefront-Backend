import { NextFunction, Request, Response } from 'express';
import userModel from '../../models/user';
import helpers from '../../helpers';
import userType from '../../types/user';

class usersController {
	public async show(req: Request, res: Response, next: NextFunction) {
		try {
			// get auth user
			const auth: userType = helpers.auth(req);
			const user = await userModel.findById(auth.id as string);
			res.status(200).json({
				status: 'success',
				data: user,
				message: 'get user successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async update(req: Request, res: Response, next: NextFunction) {
		try {
			// hash password
			if (req.body.password) {
				req.body.password = helpers.hashPassword(req.body.password);
			}
			// remove is_admin becouse we don't want user be admin
			if (req.body.is_admin) {
				delete req.body.is_admin;
			}
			// get auth user
			const auth: userType = helpers.auth(req);
			// update user
			const user = await userModel.update(auth.id as string, req.body);
			res.status(200).json({
				status: 'success',
				data: user,
				message: 'updated user successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new usersController();
