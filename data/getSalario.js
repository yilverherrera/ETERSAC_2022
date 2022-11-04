const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;

// GET /prestamospersons
module.exports = getSalario = async (empleadoId, diasQuincena) => {

    
   

        const salario = await models.Empleado.findByPk(empleadoId);

        let diaSalario = salario.salarioQuincenal / diasQuincena;

        if (salario.isSalarioSemanal === true) {
            diaSalario = salario.salarioQuincenal / 7;
        }

        const salarioQuincena = {
            monto: salario.salarioQuincenal,
            diaSalario: diaSalario.toFixed(2),
        }

        return salarioQuincena;
    
};