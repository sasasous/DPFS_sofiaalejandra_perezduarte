const validator = require('validator');

// Registro de usuarios
const validateRegister = (req, res, next) => {
    const { username, email, password, image } = req.body;
    
    if (!username || !email || !password || !image) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    
    if (username.length < 2) {
        return res.status(400).json({ message: 'El nombre de usuario debe tener al menos 3 caracteres' });
    }
    
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'El correo electrónico no es válido' });
    }
    
    if (password.length < 8) {
        return res.status(400).json({ message: 'La contraseña debe tener al menos 6 caracteres' });
    }

    if (!validator.isURL(image)) {
            return res.status(400).json({ message: 'La imagen no es válida' });
        }

    next();
}

// Login de usuarios
const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'El correo electrónico no es válido' });
    }
    
    if (password.length < 8) {
        return res.status(400).json({ message: 'La contraseña debe tener al menos 6 caracteres' });
    }

    next();
}

//Creación y modificación de productos
const validateProduct = (req, res, next) => {
    const { name, description, price, image } = req.body;
    
    if (!name || !description || !price || !image) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    
    if (name.length < 2) {
        return res.status(400).json({ message: 'El nombre del producto debe tener al menos 3 caracteres' });
    }
    
    if (description.length < 10) {
        return res.status(400).json({ message: 'La descripción del producto debe tener al menos 10 caracteres' });
    }
    
    if (price <= 0) {
        return res.status(400).json({ message: 'El precio del producto debe ser mayor a 0' });
    }

    if (!validator.isURL(image)) {
        return res.status(400).json({ message: 'La imagen no es válida' });
    }

    next();
}
