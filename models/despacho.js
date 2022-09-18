const {Model} = require('sequelize');

// Definition of the Despacho model:

module.exports = (sequelize, DataTypes) => {

    class Despacho extends Model {}

    Despacho.init({
            name: {
                type: DataTypes.STRING,
                unique: true,
                validate: {notEmpty: {msg: "Name must not be empty"}}           
            }
        }, {
            sequelize
        }
    );

    return Despacho;
};