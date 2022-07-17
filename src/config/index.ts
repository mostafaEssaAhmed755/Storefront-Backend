import dotenv from 'dotenv';

dotenv.config();

const {
	ENV,
	PORT,
	POSTGRES_HOST,
	POSTGRES_PORT,
	POSTGRES_DB,
	POSTGRES_TEST_DB,
	POSTGRES_USER,
	POSTGRES_PASSWORD,
	BCRYPT_PASSWORD,
	SALT_ROUNDS,
	TOKEN_SECRET,
} = process.env;

export default {
	port: parseInt(PORT as string, 10),
	host: POSTGRES_HOST,
	dbPort: parseInt(POSTGRES_PORT as string, 10),
	database: ENV === 'dev' ? POSTGRES_DB : POSTGRES_TEST_DB,
	user: POSTGRES_USER,
	password: POSTGRES_PASSWORD,
	pepper: BCRYPT_PASSWORD,
	salt: parseInt(SALT_ROUNDS as string, 10),
	token: TOKEN_SECRET as unknown as string,
};
