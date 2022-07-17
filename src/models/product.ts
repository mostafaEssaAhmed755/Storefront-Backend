import model from './index';

class Product extends model {
	// table name
	protected table = 'products';
	// table columns
	protected fieldes = [
		'id',
		'name',
		'price',
		'description',
		'image',
		'quantity',
		'category_id',
		'created_at',
	];
	// The columns you want to insert and update
	protected fillable = [
		'name',
		'price',
		'description',
		'image',
		'quantity',
		'category_id',
	];
	// The columns you want to hide when respond
	protected hidden = [];
}

export default new Product();
