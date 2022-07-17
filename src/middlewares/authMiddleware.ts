import { Request, Response, NextFunction } from 'express';
import helpers from '../helpers';
import Error from '../interfaces/errorInterface';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	try {
		const authHeader = req.get('Authorization');
		if (authHeader) {
			const type = authHeader.split(' ')[0].toLowerCase();
			const token = authHeader.split(' ')[1];

			if (token && type === 'bearer') {
				if (helpers.compareToken(token)) {
					next();
				} else {
					throw new Error('unAuthorized');
				}
			} else {
				throw new Error('unAuthorized');
			}
		} else {
			throw new Error('unAuthorized');
		}
	} catch (er) {
		const error: Error = new Error('unAuthorized');
		error.status = 401;
		next(error);
	}
};

export default authMiddleware;
