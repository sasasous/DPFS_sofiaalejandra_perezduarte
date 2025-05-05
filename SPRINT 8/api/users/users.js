/*Cantidad total de usuarios en la base*/
const db = require('../api/users/base');

db.query('SELECT COUNT(cantidad) FROM users_id', (err, result) => {
	if (err) {
		console.error('Error', err);
	} else {
		console.log('Count:', result.rows[1].count);
	}
});

/*Array con la colección de usuarios*/
const users = [
    {
        id: 1,
        first_Name: 'John',
        last_Name: 'Doe',
        email: 'jhondoegmail.com',
        image: 'https://example.com/johndoe.jpg'
    },
    {
        id: 2,
        first_Name: 'Jane',
        last_Name: 'Doe',
        email: 'janedoe@gmail.com',
        image: 'https://example.com/janedoe.jpg'
    },
    {
        id: 3,
        first_Name: 'Jim',
        last_Name: 'Beam',
        email: 'jimbeam@gmail.com',
        image: 'https://example.com/jimbeam.jpg'
    }
]