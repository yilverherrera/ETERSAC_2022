'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Pagoproveedors', [
{
    "observaciones": "",
    "efectivo": "190",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-06",
    createdAt: now, updatedAt: now,
    "proveedorId": "30",
    "tasa": "11.27",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2344",
},
{
    "observaciones": "",
    "efectivo": "210",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-06",
    createdAt: now, updatedAt: now,
    "proveedorId": "30",
    "tasa": "11.27",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2345",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-07",
    createdAt: now, updatedAt: now,
    "proveedorId": "1",
    "tasa": "16.07",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "494",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-07",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "17.18",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2380",
},
{
    "observaciones": "",
    "efectivo": "280",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-08",
    createdAt: now, updatedAt: now,
    "proveedorId": "65",
    "tasa": "16.52",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2422",
},
{
    "observaciones": "",
    "efectivo": "700",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-09",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "17.25",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2235",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-09",
    createdAt: now, updatedAt: now,
    "proveedorId": "5",
    "tasa": "03.34",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "496",
},
]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Pagoproveedors', null, {});

    }
};