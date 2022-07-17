import { Request, Response } from 'express';
import errorInterface from '../interfaces/errorInterface';

const errorMiddleware = (
	error: errorInterface,
	_req: Request,
	res: Response
) => {
	const status = error.status || 500;
	const message = error.message || 'something wrong';

	res.status(status).json({ status, message });
};

export default errorMiddleware;
