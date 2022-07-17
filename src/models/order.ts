import model from './index';

class Order extends model {
	// table name
	protected table = 'orders';
	// table columns
	protected fieldes = [
		'id',
		'total_price',
		'status',
		'user_id',
		'created_at',
	];
	// The columns you want to insert and update
	protected fillable = ['total_price', 'status', 'user_id'];
	// The columns you want to hide when respond
	protected hidden = [];
}

export default new Order();
