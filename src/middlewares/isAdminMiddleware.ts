import { Request, Response, NextFunction } from 'express';
import helpers from '../helpers';
import Error from '../interfaces/errorInterface';
import user from '../models/user';
import userType from '../types/user';

const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const authHeader = req.get('Authorization');
		if (authHeader) {
			const token = authHeader.split(' ')[1];
			const decode = helpers.compareToken(token) as unknown as {
				data: userType;
				iat: number;
			};
			const userId = decode.data.id as unknown as string;
			const u: userType = await user.findById(userId);

			if (u && u.is_admin === true) {
				next();
			} else {
				throw new Error('bad request');
			}
		} else {
			throw new Error('bad request');
		}
	} catch (er) {
		const error: Error = new Error('unAuthorized');
		error.status = 401;
		next(error);
	}
};

export default authMiddleware;
