'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Pagoproveedors', [

{
    "observaciones": "",
    "efectivo": "380",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-20",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "11.51",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "12253",
},
{
    "observaciones": "",
    "efectivo": "600",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-21",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "17.54",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "13830",
},
{
    "observaciones": "",
    "efectivo": "180",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-22",
    createdAt: now, updatedAt: now,
    "proveedorId": "65",
    "tasa": "18.06",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "14522",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-23",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "18.02",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "13830",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-23",
    createdAt: now, updatedAt: now,
    "proveedorId": "88",
    "tasa": "18.29",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "14759",
},
{
    "observaciones": "",
    "efectivo": "260",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-23",
    createdAt: now, updatedAt: now,
    "proveedorId": "50",
    "tasa": "08.54",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "13745",
},
{
    "observaciones": "",
    "efectivo": "260",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-23",
    createdAt: now, updatedAt: now,
    "proveedorId": "50",
    "tasa": "08.55",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "14005",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-24",
    createdAt: now, updatedAt: now,
    "proveedorId": "75",
    "tasa": "18.52",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "13221",
},


]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Pagoproveedors', null, {});

    }
};
