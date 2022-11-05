const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;

// GET /prestamospersons
module.exports = getSalario = async (empleadoId, diasQuincena = 13) => {

    
   

        const salario = await models.Empleado.findByPk(empleadoId);

        let diaSalario = salario.salarioQuincenal / diasQuincena;
        let salarioQuincenal = salario.salarioQuincenal;

        if (salario.isSalarioSemanal === true) {
            diaSalario = salario.salarioQuincenal / 6;
            salarioQuincenal = diaSalario * diasQuincena;
        }

        const salarioQuincena = {
            monto: salarioQuincenal.toFixed(2),
            diaSalario: diaSalario.toFixed(2),
        }

        return salarioQuincena;
    
};