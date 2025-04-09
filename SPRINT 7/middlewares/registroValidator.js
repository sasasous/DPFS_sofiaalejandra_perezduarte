const {check} = require("express-validator");

const registroValidator = {
    nombre: 
    check("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({min: 2})
    .withMessage("Al menos 2 caracteres"),
    correo:
    check("correo")
    .notEmpty()
    .withMessage("El correo es obligatorio")
    .bail()
    .isEmail()
    .withMessage("El correo no es válido"),
    contrasena:
    check("contrasena")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .bail()
    .isLength({min: 8})
    .withMessage("Al menos 8 caracteres"),
    imagen:
    check("imagen")
    .isURL()
    .withMessage("La imagen no es válida"),
};

module.exports = {registroValidator};