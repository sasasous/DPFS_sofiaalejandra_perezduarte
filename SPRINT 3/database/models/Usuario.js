module.exports = (sequelize, DataTypes) => {
    let alias = 'Usuario'; // nombre de la tabla

let cols = {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING(100),
    },
    correo: {
        type: DataTypes.STRING(150),
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    avatar:{
        type: DataTypes.STRING(100),
        allowNull:true
    }
}


const Usuario = sequelize.define(alias, cols,config)
return Usuario;
}