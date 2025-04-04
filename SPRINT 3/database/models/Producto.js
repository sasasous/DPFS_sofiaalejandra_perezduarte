module.exports = function(sequelize, DataTypes) {
    let alias = 'Producto';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER(100)
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        categoria: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        precio: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        fecha_agregado: {
            type: DataTypes.DATE,
            allowNull: false
        }
    };

    let config = {
        tableName: 'Producto',
        timestamps: true,
        underscored: true
    }
        
const Producto = sequelize.define(alias, cols, config)
return Producto;
}