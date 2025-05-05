/*Propiedad por cada campo de base*/
const db = require('../api/users/base');

db.query('SELECT COUNT(cantidad) FROM user_id', (err, result) => {
	if (err) {
		console.error('Error', err);
	} else {
		console.log('Count:', result.rows[1].count);
	}
});

/*URL para la imagen de perfil*/
const imageUser1 = 'https://example.com/johndoe.jpg';
const imageUser2 = 'https://example.com/janedoe.jpg';
const imageUser3 = 'https://example.com/jimbeam.jpg';