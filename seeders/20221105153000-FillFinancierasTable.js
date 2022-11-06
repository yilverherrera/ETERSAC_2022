'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Financieras', [

{
    id: 1,
    nombre: "RECAUDADORA ACCESO (SITMB)",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 2,
    nombre: "JOSE LUIS",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 3,
    nombre: "JANAMPA",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 4,
    nombre: "GRIFO GOL CHEPEN",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 5,
    nombre: "CARHUAMANCA",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 6,
    nombre: "OTRO\/SR LUCHO",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 7,
    nombre: "MAMA DE VALE",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 8,
    nombre: "EMILIA DEUDA 2022",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 9,
    nombre: "PORTALES",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 10,
    nombre: "MIRIAM A. PRESTAMO",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 11,
    nombre: "GABONAL",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 12,
    nombre: "RAUL NUÑEZ",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 13,
    nombre: "ROBERT",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
},
{
    id: 14,
    nombre: "AUREA",
    telefono: "",
            createdAt: new Date(), 
            updatedAt: new Date(),
}
 ]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Financieras', null, {});

    }
};

