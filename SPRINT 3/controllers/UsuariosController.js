const modelo = require("../modelo/índice"); 
const { Op } = require("sequelize"); 
const controlador = {};

//Obtener todos los datos de la tabla de usuarios
controlador.getAll = async  function (req, res) { 
    try { 
        const userData = await model.user.findAll(); 
        if (userData.length > 0) { 
             res 
                .status(200) 
                .json({ mensaje: "Conexión exitosa", datos: userData }); 
        } else { 
            res.status(200).json({ mensaje: "Conexión fallida", datos: [] }); 
        } 
    } catch (error) { 
        res.status(404).json({ mensaje: error }); 
    } 
};

//Obtener datos de usuario por id
controlador.getUsername = async function (req, res) {
    try {
        var userData = await modelo.user.findAll({
            where: { nombre: { [Op.like]: `%${req.params.username}%` } },
        });
        if (userData.length > 0) {
            res
                .status(200)
                .json({ mensaje: "Conexión exitosa", datos: userData });
        } else {
            res.status(200).json({ mensaje: "Conexión fallida", datos: [] });
        }
    } catch (error) {
        res.status(404).json({ mensaje: error });
    }
};

//Crear nuevos datos en la tabla de usuarios
controller.createNew = async  function (req, res) { 
    try { 
        // comprobar que los datos ya se han creado 
        const checkData = await model.user.findAll({ 
        where: { 
            [Op.or]: { 
                nombre: req.body.username, 
                contraseña: req.body.password, 
                }, 
            }, 
        }); 
    if (checkData.length > 0) { 
        res.status(500).json({ message: "el nombre de usuario/la contraseña ya están en uso" }); 
    } else { 
        await model.user 
            .create({ 
            nombre: req.body.username, 
            contraseña: req.body.password
        }) 
        .then((resultado) => { 
            res.status(201).json({ 
            mensaje: "usuario creado exitosamente",datos: { 
            nombre: req.body.username, 
            contraseña: req.body.password
                }, 
            }); 
        }); 
    } 
    } catch (error) { 
        res.status(404).json({ mensaje: error }); 
    } 
};

//Actualizar usuario
controlador.editAt = async  function (req, res) { 
    try { 
        await model.user 
            .findAll({ where: { id: req.body.id } }) 
            .then( async (result) => { 
                if (result.length > 0) { 
                    await model.user.update( 
                       { 
                           nombre: req.body.username, 
                           contraseña: req.body.password
                        }, 
                        { where: { id: req.body.id } } 
                    ); 
                    res.status(200).json({ 
                        mensaje: "actualización exitosa", 
                        datos: { 
                        id: req.body.id, 
                        nombre: req.body.username, 
                        contraseña: req.body.password 
                        }, 
                    }); 
                } else { 
                    res.status(500).json({ mensaje: "actualizar falló" }); 
                } 
            }); 
    } catch (error) { 
        res.status(404).json({ mensaje: error }); 
    } 
};

//Eliminar usuario
controlador.deleteAt = async function (req, res) { 
    try { 
        await model.user 
            .findAll({ where: { id: req.body.id } }) 
            .then( async (result) => { 
                if (result.length > 0) { 
                    await model.user.destroy({ where: { id: req.body.id } }); 
                    res.status(200).json({ mensaje: "eliminación exitosa" }); 
                } else { 
                    res.status(500).json({ mensaje: "eliminar falló" }); 
                } 
            }); 
    } catch (error) { 
        res.status(404).json({ mensaje: error }); 
    } 
};

//Exportar controlador
module.exports = controlador;