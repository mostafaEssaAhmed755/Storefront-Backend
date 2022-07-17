import model from './index';

class Order extends model {
	// table name
	protected table = 'order_items';
	// table columns
	protected fieldes = [
		'id',
		'price',
		'quantity',
		'order_id',
		'product_id',
		'created_at',
	];
	// The columns you want to insert and update
	protected fillable = ['price', 'quantity', 'order_id', 'product_id'];
	// The columns you want to hide when respond
	protected hidden = [];
}

export default new Order();
