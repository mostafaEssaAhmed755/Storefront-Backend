import model from './index';

class Category extends model {
	// table name
	protected table = 'categories';
	// table columns
	protected fieldes = ['id', 'name', 'image', 'created_at'];
	// The columns you want to insert and update
	protected fillable = ['name', 'image'];
	// The columns you want to hide when respond
	protected hidden = [];
}

export default new Category();
