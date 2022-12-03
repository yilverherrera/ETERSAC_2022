'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Pagoprestfinancieros', [
{
    
    "efectivo": "1412",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-07-04",
    
    "tasa": "18.10",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "6910",
    
    "prestfinancieroId": "14",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "628",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-07-05",
    
    "tasa": "17.20",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "6916",
    
    "prestfinancieroId": "14",
    createdAt: now, updatedAt: now,
},

{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-01",
    
    "tasa": "01.17",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7094",
    
    "prestfinancieroId": "16",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-02",
    
    "tasa": "01.26",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7100",
    
    "prestfinancieroId": "16",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "2040",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-03",
    
    "tasa": "13.14",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7104",
    
    "prestfinancieroId": "14",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-05",
    
    "tasa": "14.05",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7116",
    
    "prestfinancieroId": "18",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-06",
    
    "tasa": "18.35",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7123",
    
    "prestfinancieroId": "19",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-06",
    
    "tasa": "08.04",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7132",
    
    "prestfinancieroId": "15",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-08",
    
    "tasa": "18.06",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7138",
    
    "prestfinancieroId": "20",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-11",
    
    "tasa": "09.32",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7158",
    
    "prestfinancieroId": "15",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-18",
    
    "tasa": "08.57",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7198",
    
    "prestfinancieroId": "15",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-24",
    
    "tasa": "14.30",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7234",
    
    "prestfinancieroId": "19",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-25",
    
    "tasa": "17.26",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7241",
    
    "prestfinancieroId": "19",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-26",
    
    "tasa": "09.26",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7252",
    
    "prestfinancieroId": "15",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "750",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-08-29",
    
    "tasa": "16.07",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7264",
    
    "prestfinancieroId": "18",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-09-02",
    
    "tasa": "07.48",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7309",
    
    "prestfinancieroId": "15",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-09-02",
    
    "tasa": "09.10",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7311",
    
    "prestfinancieroId": "16",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "2040",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-09-03",
    
    "tasa": "16.20",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7314",
    
    "prestfinancieroId": "14",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "2354.5",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-09-06",
    
    "tasa": "19.56",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7331",
    
    "prestfinancieroId": "17",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-09-09",
    
    "tasa": "11.10",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7351",
    
    "prestfinancieroId": "15",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-09-13",
    
    "tasa": "00.23",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7372",
    
    "prestfinancieroId": "16",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "600",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-09-15",
    
    "tasa": "05.07",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7385",
    
    "prestfinancieroId": "16",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "950",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-09-23",
    
    "tasa": "10.07",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7428",
    
    "prestfinancieroId": "15",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "50",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-09-23",
    
    "tasa": "10.10",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7428",
    
    "prestfinancieroId": "15",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-10-01",
    
    "tasa": "22.09",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7479",
    
    "prestfinancieroId": "15",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "100",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-10-05",
    
    "tasa": "14.30",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7509",
    
    "prestfinancieroId": "15",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "600",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-10-05",
    
    "tasa": "14.43",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7509",
    
    "prestfinancieroId": "15",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "120",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-10-14",
    
    "tasa": "09.16",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7560",
    
    "prestfinancieroId": "15",
    createdAt: now, updatedAt: now,
},
{
    
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2022-10-22",
    
    "tasa": "01.38",
    "estatus": "0",
    "observaciones": "",
    "cajaId": "7602",
    
    "prestfinancieroId": "16",
    createdAt: now, updatedAt: now,
},
]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Pagoprestfinancieros', null, {});

    }
};