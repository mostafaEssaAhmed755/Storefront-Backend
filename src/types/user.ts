type userType = {
	id?: string;
	email?: string;
	first_name?: string;
	last_name?: string;
	password?: string;
	address?: string;
	age?: number;
	gender?: 'male' | 'female';
	is_admin?: boolean;
	created_at?: string;
};

export default userType;
