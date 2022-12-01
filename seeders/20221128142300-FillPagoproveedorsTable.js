'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Pagoproveedors', [
{
    "observaciones": "",
    "efectivo": "96",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-24",
    createdAt: now, updatedAt: now,
    "proveedorId": "14",
    "tasa": "19.47",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "14781",
},
{
    "observaciones": "",
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-25",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "19.14",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "14702",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-26",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "00.13",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "13830",
},
{
    "observaciones": "",
    "efectivo": "360",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-27",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "18.17",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "13830",
},
{
    "observaciones": "",
    "efectivo": "370",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-30",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "17.43",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "13830",
},
{
    "observaciones": "",
    "efectivo": "130",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-30",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "17.43",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "14252",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2021-07-31",
    createdAt: now, updatedAt: now,
    "proveedorId": "75",
    "tasa": "17.33",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "12218",
},
]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Pagoproveedors', null, {});

    }
};
