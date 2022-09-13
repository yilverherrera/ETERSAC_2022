const { Model } = require('sequelize');

// Definition of the Grupo model:

module.exports = (sequelize, DataTypes) => {

    class Grupo extends Model { }

    Grupo.init({
        nombre: {
            type: DataTypes.STRING,
            unique: true,
            validate: { notEmpty: { msg: "Nombre no puede estar vacío" } }
        },
        descripcion: {
            type: DataTypes.STRING,
            validate: { notEmpty: { msg: "Descripción no puede estar vacía" } }
        },
        isEmpresa: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        showCaja: {//Mostrar grupo en Caja
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        showAutAdm: {//Mostrar sólo a Autor y/o Admin
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        allRuta: {//False: Muestra solo a los despacho que pertenecen a la misma ruta del grupo. y true a todas las rutas de la empresa que pertenece el rupo
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize
    }
    );

    return Grupo;
};