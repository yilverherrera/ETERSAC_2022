'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        let now = new Date();
        await queryInterface.bulkInsert('Servbuses', [
{
    "id": "242996",
    "serviceId": "1",
    "monto": "170",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "1052",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "43",
    "efectivo": "170",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "242999",
    "serviceId": "1",
    "monto": "170",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "83",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "37",
    "efectivo": "170",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243000",
    "serviceId": "1",
    "monto": "150",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "890",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "24",
    "efectivo": "150",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243001",
    "serviceId": "1",
    "monto": "170",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "1018",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "41",
    "efectivo": "170",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243002",
    "serviceId": "1",
    "monto": "170",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "61",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "35",
    "efectivo": "170",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243006",
    "serviceId": "3",
    "monto": "50",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "1",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "87",
    "efectivo": "50",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243007",
    "serviceId": "3",
    "monto": "50",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "1",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "113",
    "efectivo": "50",
    "dollar": "0",
    "fecha": "2022-06-01",
    createdAt: now, updatedAt: now,
},
{
    "id": "243008",
    "serviceId": "2",
    "monto": "96",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "1",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "24",
    "efectivo": "96",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243009",
    "serviceId": "4",
    "monto": "4",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "1",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "26",
    "efectivo": "4",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243010",
    "serviceId": "4",
    "monto": "4",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "1",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "54",
    "efectivo": "4",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243011",
    "serviceId": "4",
    "monto": "4",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "1",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "29",
    "efectivo": "4",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243012",
    "serviceId": "4",
    "monto": "4",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "1",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "91",
    "efectivo": "4",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243014",
    "serviceId": "4",
    "monto": "4",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "1",
    "estatus": "0",
    "cajaId": "6961",
    "unidadId": "51",
    "efectivo": "4",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243015",
    "serviceId": "1",
    "monto": "170",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "445",
    "estatus": "0",
    "cajaId": "6964",
    "unidadId": "44",
    "efectivo": "170",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243016",
    "serviceId": "1",
    "monto": "170",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "151",
    "estatus": "0",
    "cajaId": "6964",
    "unidadId": "34",
    "efectivo": "170",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243017",
    "serviceId": "1",
    "monto": "170",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "369",
    "estatus": "0",
    "cajaId": "6964",
    "unidadId": "28",
    "efectivo": "170",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},
{
    "id": "243018",
    "serviceId": "1",
    "monto": "170",
    "banco": "0",
    "cpc": "0",
    "anticipo": "0",
    "dctoFalla": "0",
    "dctoSinietro": "0",
    "dctoAutoridad": "0",
    "fechaCaja": "2022-07-11",
    "operadorId": "648",
    "estatus": "0",
    "cajaId": "6964",
    "unidadId": "49",
    "efectivo": "170",
    "dollar": "0",
    "fecha": "2022-07-11",
    createdAt: now, updatedAt: now,
},


]);
    },
    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Servbuses', null, {});
    }
};