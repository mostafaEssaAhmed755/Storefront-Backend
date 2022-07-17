import db from '../config/database';

class model {
	protected table!: string;
	protected fieldes!: string[];
	protected fillable!: string[];
	protected hidden!: string[];

	// get all
	public async all<T>(): Promise<T[]> {
		try {
			const connect = await db.connect();

			const q = `SELECT ${this.getSelectedParams()} 
			FROM ${this.table} `;

			const result = await connect.query(q);

			connect.release();

			return result.rows;
		} catch (error) {
			throw new Error(
				`unable to get all recorde from ${this.table} table : ${
					(error as Error).message
				}`
			);
		}
	}
	// get one
	public async findById<T>(id: string): Promise<T> {
		try {
			const connect = await db.connect();

			const q = `SELECT ${this.getSelectedParams()} 
			FROM ${this.table}
            WHERE id=$1`;

			const result = await connect.query(q, [id]);

			connect.release();

			return result.rows[0];
		} catch (error) {
			throw new Error(
				`unable to get recorde from ${this.table} table ${id}: ${
					(error as Error).message
				}`
			);
		}
	}
	// find where
	public async findBy<T>(data: {
		name: string;
		value: string | number | boolean;
	}): Promise<T[]> {
		try {
			const connect = await db.connect();

			const q = `SELECT ${this.getSelectedParams()} 
			FROM ${this.table}
            WHERE ${data.name}=$1`;

			const result = await connect.query(q, [data.value]);

			connect.release();

			return result.rows;
		} catch (error) {
			throw new Error(
				`unable to get recorde from ${this.table} table : ${
					(error as Error).message
				}`
			);
		}
	}
	// create
	public async create<T>(model: T): Promise<T> {
		try {
			const connect = await db.connect();

			const data = this.getInsertableFieldes(model);

			const params = Object.keys(data).join(',');
			const values = Object.values(data)
				.map((v) => `'${v}'`)
				.join(',');

			const q = `INSERT INTO ${this.table} 
			(${params})
			VALUES (${values})
			RETURNING ${this.getSelectedParams()}`;

			const result = await connect.query(q);

			connect.release();

			return result.rows[0];
		} catch (error) {
			throw new Error(
				`unable to creta  ${JSON.stringify(model)} in ${
					this.table
				} table : ${(error as Error).message}`
			);
		}
	}
	// update
	public async update<T>(id: string, model: T): Promise<T> {
		try {
			const connect = await db.connect();

			const data = this.getInsertableFieldes(model);

			const params = Object.entries(data)
				.map(([key, val]) => {
					if (this.fillable.includes(key)) {
						return `${key}='${val}'`;
					}
				})
				.join(',');

			const q = `UPDATE ${this.table} 
				SET ${params}
				WHERE id=$1
				RETURNING ${this.getSelectedParams()}`;

			const result = await connect.query(q, [id]);

			connect.release();

			return result.rows[0];
		} catch (error) {
			throw new Error(
				`unable to update ${this.table} ${id} : ${
					(error as Error).message
				}`
			);
		}
	}
	// delete
	public async delete<T>(id: string): Promise<T> {
		try {
			const connect = await db.connect();

			const q = `DELETE FROM ${this.table} CASCADE
				WHERE id=$1
				RETURNING ${this.getSelectedParams()}`;

			const result = await connect.query(q, [id]);

			connect.release();

			return result.rows[0];
		} catch (error) {
			throw new Error(
				`unable to delete recorde from ${this.table} table ${id} : ${
					(error as Error).message
				}`
			);
		}
	}
	// to get selectable fieldes
	protected getSelectedParams(): string {
		return this.fieldes.filter((v) => !this.hidden.includes(v)).join(',');
	}
	// check if the coming data is insertable
	protected getInsertableFieldes<T>(model: T): {
		[k: string]: string | number;
	} {
		const data: { [k: string]: string | number } = {};

		Object.entries(model).map(([k, v]) => {
			if (this.fillable.includes(k)) {
				data[`${k}`] = v;
			}
		});

		if (Object.keys(data).length === 0) {
			throw new Error(`not valid paramas ${JSON.stringify(model)}`);
		}

		return data;
	}
}

export default model;
