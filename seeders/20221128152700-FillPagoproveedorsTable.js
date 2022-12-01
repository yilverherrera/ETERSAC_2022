'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Pagoproveedors', [
{
    
    "fueradCaja": "1431",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "",
    "fecha": "2022-10-18",
    "busgastoId": "20121",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "1070",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "",
    "fecha": "2022-10-26",
    "busgastoId": "20117",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "1540",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "",
    "fecha": "2022-10-29",
    "busgastoId": "20115",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "1215",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "",
    "fecha": "2022-10-31",
    "busgastoId": "14859",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "1560",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "",
    "fecha": "2022-11-07",
    "busgastoId": "20115",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "849.6",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "",
    "fecha": "2022-11-12",
    "busgastoId": "20115",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "200",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "",
    "fecha": "2022-11-14",
    "busgastoId": "20518",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
},
{
    
    "fueradCaja": "1075.5",
    "efectivo": "0",
    "banco": "0",
    "dollar": "0",
    "tasa": "0",
    "estatus": "0",
    "proveedorId": "1",
    "observaciones": "",
    "fecha": "2022-11-16",
    "busgastoId": "20117",
    "cajaId": "1",
    createdAt: now, updatedAt: now,
}
]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Pagoproveedors', null, {});

    }
};  
