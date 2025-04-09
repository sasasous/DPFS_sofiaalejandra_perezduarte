//Variable que almacenará un array de validaciones
const validateProduct = [
    //Validación de nombre
    check('name')
        .notEmpty()
        .withMessage('El nombre es obligatorio')
        .isLength({ min: 5 })
        .withMessage('Al menos 5 caracteres'),

    //Validación de descripción
    check('description')
        .isLength({ min: 20 })
        .withMessage('Al menos 20 caracteres'),

    //Validación de imagen
    check('imageUrl')
        .optional()
        .isURL()
        .withMessage('La URL de la imagen no es válida'),
];

