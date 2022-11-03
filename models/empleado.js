const {Model} = require('sequelize');

// Definition of the Empleado model:

module.exports = (sequelize, DataTypes) => {

    class Empleado extends Model {}

    Empleado.init({
            nombres: {
                type:DataTypes.STRING,
                validate: {notEmpty: {msg: "Nombres no puede estar vacío"}}
            },
            fechaNac: {
                type: DataTypes.DATEONLY,
            },
            cargo: {
                type:DataTypes.STRING,
            },
            salarioQuincenal: {
                type: DataTypes.DOUBLE,
                validate: {notEmpty: {msg: "Salario no puede estar vacío"}}  
            },
            isSalarioSemanal:{
                type:DataTypes.BOOLEAN,
                defaultValue: false,
            },
            isActive:{
                type:DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }, {
            sequelize
        }
    );

    return Empleado;
};