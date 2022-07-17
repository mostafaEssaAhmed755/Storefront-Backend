import { Request, Response, NextFunction } from 'express';
import userModel from '../models/user';
import helpers from '../helpers';

class auth {
	public async register(req: Request, res: Response, next: NextFunction) {
		try {
			// hash password
			req.body.password = helpers.hashPassword(req.body.password);
			// remove is_admin becouse we don't want user be admin
			if (req.body.is_admin) {
				delete req.body.is_admin;
			}
			// create user
			const user = await userModel.create(req.body);
			// generate token for registered user
			const token = helpers.generateToken(user);

			res.status(200).json({
				status: 'success',
				data: { ...user, token },
				message: 'created user successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
	public async login(req: Request, res: Response, next: NextFunction) {
		try {
			const user = await userModel.attempt(
				req.body.email,
				req.body.password
			);
			const token = helpers.generateToken(user);

			res.status(200).json({
				status: 'success',
				data: { ...user, token },
				message: 'authenticated user successfuly',
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new auth();
