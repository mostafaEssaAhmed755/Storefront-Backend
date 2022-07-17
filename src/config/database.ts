import { Pool } from 'pg';
import config from '.';

const db = new Pool({
	host: config.host,
	port: config.dbPort,
	database: config.database,
	user: config.user,
	password: config.password,
	max: 4,
});

export default db;
