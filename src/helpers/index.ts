import config from '../config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request } from 'express';
import userType from '../types/user';

const hashPassword = (password: string) => {
	return bcrypt.hashSync(`${password}${config.pepper}`, config.salt);
};

const comparePassword = (password: string, encrypted: string) => {
	return bcrypt.compareSync(`${password}${config.pepper}`, encrypted);
};

const generateToken = <T>(data: T): string => {
	try {
		return jwt.sign({ data }, config.token);
	} catch (error) {
		throw new Error('cant login');
	}
};

const compareToken = (token: string) => {
	try {
		return jwt.verify(token, config.token);
	} catch (error) {
		throw new Error('unAuthorized');
	}
};

const auth = (req: Request): userType => {
	try {
		const authHeader = req.get('Authorization') as string;
		const token = authHeader.split(' ')[1];
		const auth = compareToken(token) as { data: userType; iat: number };
		return auth.data;
	} catch (error) {
		throw new Error('unAuthanticated');
	}
};
export default {
	hashPassword,
	comparePassword,
	generateToken,
	compareToken,
	auth,
};
