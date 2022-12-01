'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Pagoproveedors', [
{
    "observaciones": "",
    "efectivo": "320",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-19",
    createdAt: now, updatedAt: now,
    "proveedorId": "10",
    "tasa": "19.22",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3733",
},
{
    "observaciones": "",
    "efectivo": "60",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-19",
    createdAt: now, updatedAt: now,
    "proveedorId": "10",
    "tasa": "19.42",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3247",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-19",
    createdAt: now, updatedAt: now,
    "proveedorId": "4",
    "tasa": "05.14",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "161",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-20",
    createdAt: now, updatedAt: now,
    "proveedorId": "50",
    "tasa": "12.57",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3133",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-20",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "13.41",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3036",
},
{
    "observaciones": "",
    "efectivo": "1500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-20",
    createdAt: now, updatedAt: now,
    "proveedorId": "5",
    "tasa": "03.34",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2883",
},

]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Pagoproveedors', null, {});

    }
};
