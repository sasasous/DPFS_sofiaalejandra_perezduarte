/*Propiedad por cada campo de base*/
const db = require('../api/products/base');

db.query('SELECT COUNT(cantidad) FROM product_id', (err, result) => {
	if (err) {
		console.error('Error', err);
	} else {
		console.log('Count:', result.rows[1].count);
	}
});

/*array por cada relación de uno a muchos*/
let category = [2021, 2022, 2023, 2024, 2025];

/* URL para la imagen del producto (para mostrar la imagen)*/
const imageProduct1 = '/SPRINT-8/assets/vampiro.png';
const imageProduct2 = '/SPRINT-8/assets/gatitos-y-café.png';
const imageProduct3 = '/SPRINT-8/assets/love.png';
const imageProduct4 = '/SPRINT-8/assets/hastío.png';
const imageProduct5 = '/SPRINT-8/assets/serpiente.png';