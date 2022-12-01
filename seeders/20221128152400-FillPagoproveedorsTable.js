'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Pagoproveedors', [
{
    
    "fueradCaja": "298.5",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "PAGO FUERA DE CAJA SR LUCHO",
    "fecha": "2020-11-07",
    "busgastoId": "3049",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "600",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "PAGO FUERA DE CAJA SR LUCHO",
    "fecha": "2020-11-07",
    "busgastoId": "5962",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "1820",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "PAGO FUERA DE CAJA SR LUCHO",
    "fecha": "2020-11-07",
    "busgastoId": "275",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "880",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "PAGO FUERA DE CAJA SR LUCHO",
    "fecha": "2020-11-07",
    "busgastoId": "3245",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "400",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "PAGO FUERA DE CAJA SR LUCHO",
    "fecha": "2020-11-07",
    "busgastoId": "5422",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "770",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "PAGO FUERA DE CAJA SR LUCHO",
    "fecha": "2020-11-07",
    "busgastoId": "7180",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "53",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "PAGO FUERA DE CAJA SR LUCHO",
    "fecha": "2020-11-07",
    "busgastoId": "3208",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "40",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "",
    "fecha": "2021-07-27",
    "busgastoId": "12102",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "150",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "pago por fuera  sr lucho",
    "fecha": "2020-11-12",
    "busgastoId": "6710",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "1000",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "PAGO FUERA DE CAJA  SR LUCHO",
    "fecha": "2020-11-09",
    "busgastoId": "95",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "1292",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "PAGO FUERA DE CAJA  SR LUCHO",
    "fecha": "2020-11-09",
    "busgastoId": "98",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "400",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "",
    "fecha": "2020-11-12",
    "busgastoId": "6645",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},

 ]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Pagoproveedors', null, {});

    }
};  
