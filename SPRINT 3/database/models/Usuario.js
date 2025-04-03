module.exports = (sequelize, DataTypes) => {
    let alias = 'Usuario'; // nombre de la tabla

let cols = {
    usuario_id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true
    },
    contrasena: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    categoria :{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    imagen :{
        type: DataTypes.STRING(255),
        allowNull:true
    }
}

let config = {
    tableName: 'Usuario',
    timestamps: false,
    underscored: true
}

const Usuario = sequelize.define(alias, cols,config)
return Usuario;
}