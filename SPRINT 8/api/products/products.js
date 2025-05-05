/*Cantidad total de productos en la base*/
const db = require('../api/products/base');

db.query('SELECT COUNT(cantidad) FROM product_id', (err, result) => {
	if (err) {
		console.error('Error', err);
	} else {
		console.log('Count:', result.rows[1].count);
	}
});

/*Objeto literal con una propiedad por categoría con el total de productos*/
const db = require('../api/products/base');

db.query('SELECT category, COUNT(cantidad) FROM products GROUP BY category', (err, result) => {
	if (err) {
		console.error('Error', err);
	} else {
		const categories = result.rows.reduce((acc, row) => {
			acc[row.category] = row.count;
			return acc;
		}, {});
		console.log('Categories:', categories);
	}
});

/*Array con la producción de productos*/
const products = [
	{
		product_id: 1,
		name: 'Vampiro',
		price: '$10.00',
		category: '2021',
		aggregation_date: '2023-10-01'
	},
	{
		product_id: 2,
		name: 'Gatitos y café',
		price: '$10.00',
		category: '2022',
		aggregation_date: '2023-10-02'
	},
	{
		product_id: 3,
		name: 'l0v3',
		price: '$10.00',
		category: '2022',
		aggregation_date: '2023-10-03'
	},
	{
		product_id: 4,
		name: 'Hatío',
		price: '$10.00',
		category: '2022',
		aggregation_date: '2023-10-04'
	},
	{
		product_id: 5,
		name: 'Serpiente',
		price: '$10.00',
		category: '2022',
		aggregation_date: '2023-10-05'
	}
]
