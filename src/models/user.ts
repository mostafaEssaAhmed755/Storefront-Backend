import db from '../config/database';
import userType from '../types/user';
import helpers from '../helpers';
import model from './index';

class User extends model {
	// table name
	protected table = 'users';
	// table columns
	protected fieldes = [
		'id',
		'email',
		'password',
		'first_name',
		'last_name',
		'address',
		'age',
		'gender',
		'is_admin',
		'created_at',
	];
	// The columns you want to insert and update
	protected fillable = [
		'email',
		'password',
		'first_name',
		'last_name',
		'address',
		'age',
		'gender',
		'is_admin',
	];
	// The columns you want to hide when respond
	protected hidden = ['password'];

	// get all
	public async attempt(email: string, password: string): Promise<userType> {
		try {
			const connect = await db.connect();

			const q = `SELECT id, email, password, first_name, last_name, address, age, gender 
				FROM ${this.table}
				WHERE email=$1 
				LIMIT 1`;

			const result = await connect.query(q, [email]);

			connect.release();
			// check if not empty
			if (result.rows[0]) {
				// check if password match with encrypted one
				if (
					helpers.comparePassword(password, result.rows[0].password)
				) {
					// remove password from response
					delete result.rows[0].password;

					return result.rows[0];
				}

				throw new Error('user password not correct');
			}

			throw new Error(`user ${email} not exists`);
		} catch (error) {
			throw new Error(
				`unable to authenticate : ${(error as Error).message}`
			);
		}
	}
}

export default new User();
