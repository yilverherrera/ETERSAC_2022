'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        let now = new Date();
        await queryInterface.bulkInsert('Nominas', [
{
    "id": "1",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "2",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "18",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "482",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "3",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "4",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "5",
    "empleadoId": "5",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "6",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "7",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "8",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "9",
    "empleadoId": "9",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "10",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "11",
    "empleadoId": "11",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "12",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "13",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "14",
    "empleadoId": "14",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "15",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "16",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "17",
    "empleadoId": "17",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "18",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "19",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "20",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "21",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "22",
    "empleadoId": "24",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "23",
    "empleadoId": "25",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "24",
    "empleadoId": "28",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "300",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "25",
    "empleadoId": "29",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "250",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "1"
},
{
    "id": "26",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "27",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "28",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "29",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "30",
    "empleadoId": "5",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "31",
    "empleadoId": "6",
    "diasFalta": "2",
    "montoFalta": "130",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "670",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "32",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "33",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "34",
    "empleadoId": "9",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "30.5",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "35",
    "empleadoId": "10",
    "diasFalta": "1",
    "montoFalta": "125",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1375",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "36",
    "empleadoId": "11",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "37",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "38",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "39",
    "empleadoId": "14",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "40",
    "empleadoId": "15",
    "diasFalta": "15",
    "montoFalta": "250",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "41",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "42",
    "empleadoId": "17",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "43",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "44",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "45",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "66.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733.33",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "46",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "47",
    "empleadoId": "24",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "48",
    "empleadoId": "25",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "49",
    "empleadoId": "28",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "300",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "50",
    "empleadoId": "29",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "250",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "2"
},
{
    "id": "51",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "52",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "458",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "53",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "54",
    "empleadoId": "4",
    "diasFalta": "2",
    "montoFalta": "166.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.34",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "55",
    "empleadoId": "5",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "56",
    "empleadoId": "6",
    "diasFalta": "1",
    "montoFalta": "66.6",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "57",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "58",
    "empleadoId": "8",
    "diasFalta": "1",
    "montoFalta": "83.3",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "59",
    "empleadoId": "9",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "60",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "61",
    "empleadoId": "11",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "62",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "63",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "64",
    "empleadoId": "14",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "65",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "66",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "67",
    "empleadoId": "17",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "68",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "69",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "70",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "66.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733.33",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "71",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "72",
    "empleadoId": "24",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "73",
    "empleadoId": "25",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "74",
    "empleadoId": "28",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "300",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "75",
    "empleadoId": "29",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "3"
},
{
    "id": "76",
    "empleadoId": "1",
    "diasFalta": "1",
    "montoFalta": "41.7",
    "diasFaltaDescripcion": "20",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "438.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "77",
    "empleadoId": "2",
    "diasFalta": "2",
    "montoFalta": "83.4",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "416.6",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "78",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "79",
    "empleadoId": "4",
    "diasFalta": "2",
    "montoFalta": "166.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "80",
    "empleadoId": "5",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "81",
    "empleadoId": "6",
    "diasFalta": "1",
    "montoFalta": "66.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "82",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "83",
    "empleadoId": "8",
    "diasFalta": "1",
    "montoFalta": "83.3",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "84",
    "empleadoId": "9",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "85",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "86",
    "empleadoId": "11",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "87",
    "empleadoId": "12",
    "diasFalta": "1",
    "montoFalta": "66.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "88",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "89",
    "empleadoId": "14",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "90",
    "empleadoId": "15",
    "diasFalta": "1",
    "montoFalta": "83.3",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "91",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "92",
    "empleadoId": "17",
    "diasFalta": "1",
    "montoFalta": "83.3",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "93",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "94",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "95",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "66.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733.33",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "96",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "97",
    "empleadoId": "24",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "98",
    "empleadoId": "25",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "99",
    "empleadoId": "28",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "100",
    "empleadoId": "29",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "101",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "375",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "4"
},
{
    "id": "102",
    "empleadoId": "1",
    "diasFalta": "1",
    "montoFalta": "41.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "458.33",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "103",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "104",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "105",
    "empleadoId": "4",
    "diasFalta": "3",
    "montoFalta": "250",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "106",
    "empleadoId": "5",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "107",
    "empleadoId": "6",
    "diasFalta": "3",
    "montoFalta": "200",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "108",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "109",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "110",
    "empleadoId": "9",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "111",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "112",
    "empleadoId": "11",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "113",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "114",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "115",
    "empleadoId": "14",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "116",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "117",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "118",
    "empleadoId": "17",
    "diasFalta": "8",
    "montoFalta": "666.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "333.33",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "119",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "120",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "121",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "122",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "123",
    "empleadoId": "24",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "124",
    "empleadoId": "25",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "125",
    "empleadoId": "28",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "126",
    "empleadoId": "29",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "127",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "128",
    "empleadoId": "32",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "129",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "5"
},
{
    "id": "130",
    "empleadoId": "1",
    "diasFalta": "1",
    "montoFalta": "41.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "458.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "131",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "132",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "133",
    "empleadoId": "4",
    "diasFalta": "2",
    "montoFalta": "166.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "134",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "130",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "670",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "135",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "136",
    "empleadoId": "9",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "720",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "137",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "138",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "139",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "140",
    "empleadoId": "14",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "20",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "105",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "141",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "142",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "143",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "144",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "145",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "146",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "10",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "278.75",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "147",
    "empleadoId": "24",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "232.5",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "148",
    "empleadoId": "25",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "193.75",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "149",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "150",
    "empleadoId": "32",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "151",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "6"
},
{
    "id": "152",
    "empleadoId": "1",
    "diasFalta": "1",
    "montoFalta": "41.6",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "458.4",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "153",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "154",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "155",
    "empleadoId": "4",
    "diasFalta": "2",
    "montoFalta": "166.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "156",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "90",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "890",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "157",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "158",
    "empleadoId": "9",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "720",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "159",
    "empleadoId": "10",
    "diasFalta": "1",
    "montoFalta": "125",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1375",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "160",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "161",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "162",
    "empleadoId": "14",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "163",
    "empleadoId": "15",
    "diasFalta": "1",
    "montoFalta": "83.33",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "164",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "165",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "166",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "167",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "168",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "250",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "169",
    "empleadoId": "24",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "271.25",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "170",
    "empleadoId": "25",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "193.75",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "171",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "172",
    "empleadoId": "32",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "173",
    "empleadoId": "33",
    "diasFalta": "2",
    "montoFalta": "166.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "174",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "7"
},
{
    "id": "175",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "176",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "177",
    "empleadoId": "4",
    "diasFalta": "4",
    "montoFalta": "333.4",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "666.6",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "178",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "179",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "180",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "181",
    "empleadoId": "9",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "720",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "182",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "183",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "184",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "185",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "186",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "187",
    "empleadoId": "18",
    "diasFalta": "1",
    "montoFalta": "66.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733.33",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "188",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "189",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "190",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "191",
    "empleadoId": "32",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "192",
    "empleadoId": "33",
    "diasFalta": "1",
    "montoFalta": "83.33",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.66",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "193",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "8"
},
{
    "id": "194",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "195",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "196",
    "empleadoId": "4",
    "diasFalta": "2",
    "montoFalta": "166.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.34",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "197",
    "empleadoId": "6",
    "diasFalta": "1",
    "montoFalta": "66.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733.34",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "198",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "199",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "200",
    "empleadoId": "9",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "720",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "201",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "202",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "203",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "204",
    "empleadoId": "15",
    "diasFalta": "1",
    "montoFalta": "83.33",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "205",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "206",
    "empleadoId": "18",
    "diasFalta": "1",
    "montoFalta": "66.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733.33",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "207",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "208",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "209",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "210",
    "empleadoId": "32",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "211",
    "empleadoId": "33",
    "diasFalta": "1",
    "montoFalta": "66.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "212",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "9"
},
{
    "id": "213",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "214",
    "empleadoId": "2",
    "diasFalta": "1",
    "montoFalta": "41.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "458.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "215",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "216",
    "empleadoId": "4",
    "diasFalta": "2",
    "montoFalta": "166.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.34",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "217",
    "empleadoId": "6",
    "diasFalta": "12",
    "montoFalta": "800",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "218",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "219",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "220",
    "empleadoId": "9",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "720",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "221",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "222",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "223",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "224",
    "empleadoId": "14",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "225",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "226",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "227",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "228",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "229",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "230",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "231",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "232",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "10"
},
{
    "id": "233",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "50 DE 101 SALDO 51. FALTANTE DE LIQUIDACIÓN 24-01-20",
    "bono": "100 SE LE DEBE 2 DIAS 30 Y 31 DE ENERO DE 2019 Y 100 SOLES DE LA QUINCENA PASADA. YA QUE SU AJUSTE FUE APARTIR DEL 1 DE ENERO A 600 QUINCENAL",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "234",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "235",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "236",
    "empleadoId": "4",
    "diasFalta": "3",
    "montoFalta": "249.9",
    "diasFaltaDescripcion": "300 diasFaltaDescripcion DE FACTURA PENDIENTE. EL TIENE CONOCIMIENTO",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "450",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "237",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "238",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "239",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "240",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "241",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "242",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "243",
    "empleadoId": "14",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "244",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "245",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "246",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "247",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "248",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "249",
    "empleadoId": "33",
    "diasFalta": "1",
    "montoFalta": "83.3",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "250",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "251",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "11"
},
{
    "id": "252",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "253",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "254",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "255",
    "empleadoId": "4",
    "diasFalta": "2",
    "montoFalta": "166.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "256",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "257",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "258",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "259",
    "empleadoId": "10",
    "diasFalta": "1",
    "montoFalta": "125",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1375",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "260",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "261",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "262",
    "empleadoId": "14",
    "diasFalta": "6",
    "montoFalta": "250",
    "diasFaltaDescripcion": "diasFaltaDescripcion 175 DEBE PD28",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "75",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "263",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "264",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "265",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "266",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "267",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "268",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "269",
    "empleadoId": "34",
    "diasFalta": "6",
    "montoFalta": "400",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "270",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "20 FALTANTE",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "780",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "12"
},
{
    "id": "271",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "20 SOLES FALTANTE DE CAJA 1883 27-02-20",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "580",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "272",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "273",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "274",
    "empleadoId": "4",
    "diasFalta": "2",
    "montoFalta": "166.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "275",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "276",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "277",
    "empleadoId": "8",
    "diasFalta": "1",
    "montoFalta": "83.3",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "278",
    "empleadoId": "10",
    "diasFalta": "1",
    "montoFalta": "125",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1375",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "279",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "280",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "281",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "282",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "283",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "284",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "285",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "286",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "287",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "288",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "289",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "13"
},
{
    "id": "290",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "291",
    "empleadoId": "2",
    "diasFalta": "6",
    "montoFalta": "250",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "250",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "292",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "293",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "294",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "295",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "YA COBRO LA 1RA QUINCENA DE MARZO. DEBE ESPERA ULTIMA QUINCENA DE MARZO",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "296",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "297",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "298",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "299",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "300",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "301",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "302",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "303",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "66.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "304",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "305",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "306",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "307",
    "empleadoId": "34",
    "diasFalta": "1",
    "montoFalta": "66.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "308",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "331",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "746",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "309",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "310",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "14"
},
{
    "id": "311",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "580",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "312",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "313",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "100 se le desconto. Cuenta pd02 y este conductor se llevo la cuenta",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "314",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "315",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "316",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "317",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "350",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "318",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "100 se le desconto. Cuenta pd02 y este conductor se llevo la cuenta",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "319",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "320",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "321",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "322",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "100 se le desconto. Cuenta pd02 y este conductor se llevo la cuenta",
    "bono": "100 SOLES MENOS PORQUE QUINCENA PASADA COBRO 100 SOLES +",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "323",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "324",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "325",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "326",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "327",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "328",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "150 se le desconto. Petroleo que no cobro a Barrios pd02 y este conductor se llevo la cuenta",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "680",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "329",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "16"
},
{
    "id": "330",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "TRABAJÓ 3 DIAS",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "150",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "332",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "333",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "334",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "250",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "335",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "336",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "337",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "338",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "339",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "340",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "341",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "342",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "343",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "344",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "345",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "346",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "347",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "350",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "352",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "351",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "348",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "349",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "100 SOLES SE APLICARAN PROX QUINCENA",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "353",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "354",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "355",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "356",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "357",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "358",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "200",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "359",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "360",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "361",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "362",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "363",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "364",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "365",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "366",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "367",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "368",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "369",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "15"
},
{
    "id": "370",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "371",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "372",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "373",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "374",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "375",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "376",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "377",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "378",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "379",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "250",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "380",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "381",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "382",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "383",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "384",
    "empleadoId": "10",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "385",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "386",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "387",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "388",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "389",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "390",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "391",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "399",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "393",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "394",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "395",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "396",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "397",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "398",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "400",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "17"
},
{
    "id": "401",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "18"
},
{
    "id": "402",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "19"
},
{
    "id": "403",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "404",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "520",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "405",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "560",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "406",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "407",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "408",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "520",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "409",
    "empleadoId": "15",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "410",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "411",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "412",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "413",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "414",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "415",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "416",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "417",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "418",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "419",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "20"
},
{
    "id": "420",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "422",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "423",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "424",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "425",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "426",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "427",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "00",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "428",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "429",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "430",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "00",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "431",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "432",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "433",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "434",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "435",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "436",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "437",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "21"
},
{
    "id": "438",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "439",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "00",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "440",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "441",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "442",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "443",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "444",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "445",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "446",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "447",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "448",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "449",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "450",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "451",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "452",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "453",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "454",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "455",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "456",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "457",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "458",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "459",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "460",
    "empleadoId": "42",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "461",
    "empleadoId": "43",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "720",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "22"
},
{
    "id": "462",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "463",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "464",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "465",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "466",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "467",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "468",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "469",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "470",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "471",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "472",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "473",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "474",
    "empleadoId": "30",
    "diasFalta": "2",
    "montoFalta": "66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "434",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "475",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "476",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "477",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "478",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "479",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "480",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "481",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "482",
    "empleadoId": "42",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "483",
    "empleadoId": "43",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "720",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "535",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "484",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "485",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "486",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "487",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "488",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "489",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "490",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "diasFaltaDescripcion POR PÉRDIDA DE DINERO ROBO PROFAM 100 S\/ QUINCENAL",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "491",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "492",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "493",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "494",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "495",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "496",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "497",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "498",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "499",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "500",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "501",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "502",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "503",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "504",
    "empleadoId": "42",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "505",
    "empleadoId": "43",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "720",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "509",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "506",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "23"
},
{
    "id": "507",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "diasFaltaDescripcion DE INCIDENTE OCASIONADO 150 QUINCENAL",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "450",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "508",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "510",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "diasFaltaDescripcion POR INCIDENTE OCASIONADO",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "450",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "511",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "512",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "513",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "514",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "515",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "516",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "diasFaltaDescripcion POR PERDIDA DE DINERO 100\/S",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "517",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "518",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "519",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "520",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "521",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "522",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "523",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "524",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "525",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "526",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "527",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "528",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "529",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "530",
    "empleadoId": "42",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "531",
    "empleadoId": "43",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "720",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "532",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "25"
},
{
    "id": "533",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "156",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "24"
},
{
    "id": "534",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "536",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "537",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "538",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "539",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "540",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "541",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "542",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "543",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "544",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "545",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "546",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "547",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "548",
    "empleadoId": "34",
    "diasFalta": "4",
    "montoFalta": "250",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "549",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "550",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "551",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "552",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "553",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "554",
    "empleadoId": "42",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "555",
    "empleadoId": "43",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "720",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "556",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "557",
    "empleadoId": "11",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "558",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "26"
},
{
    "id": "559",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "560",
    "empleadoId": "6",
    "diasFalta": "3",
    "montoFalta": "175",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "525",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "561",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "562",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "563",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "564",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "565",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "566",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "567",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "568",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "569",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "570",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "571",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "572",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "573",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "574",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "575",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "576",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "577",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "578",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "579",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "150 DESCUENTA POR PRESTAMO",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "580",
    "empleadoId": "11",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "581",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "27"
},
{
    "id": "583",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "582",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "584",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "585",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "450",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "586",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "587",
    "empleadoId": "8",
    "diasFalta": "2",
    "montoFalta": "125",
    "diasFaltaDescripcion": "2 FALTAS",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "625",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "588",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "589",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "590",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "591",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "592",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "593",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "594",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "595",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "596",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "597",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "598",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "599",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "600",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "601",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "602",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "603",
    "empleadoId": "11",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "125",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "604",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "605",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "606",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "607",
    "empleadoId": "46",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "465",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "28"
},
{
    "id": "608",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "609",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "100 PRESTAMO 1000 SALDO 900",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "610",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "611",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "450",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "612",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "613",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "614",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "615",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "616",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "617",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "618",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "619",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "620",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "621",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "622",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "623",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "624",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "625",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "626",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "627",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "628",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "629",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "630",
    "empleadoId": "46",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "310",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "631",
    "empleadoId": "6",
    "diasFalta": "3",
    "montoFalta": "175",
    "diasFaltaDescripcion": "29.5 faltante 06-10-20 pago a Kuska",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "495.5",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "632",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "50 pago de PRESTAMO 1000 S\/ SALDO 850",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "633",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "634",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "150 diasFaltaDescripcion",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "450",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "635",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "636",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "637",
    "empleadoId": "8",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "638",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "639",
    "empleadoId": "13",
    "diasFalta": "2",
    "montoFalta": "116.66",
    "diasFaltaDescripcion": "100 DESC",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "483.34",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "640",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "641",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "642",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "643",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "644",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "645",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "646",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "647",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "648",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "649",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "650",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "651",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "652",
    "empleadoId": "46",
    "diasFalta": "1",
    "montoFalta": "38.75",
    "diasFaltaDescripcion": "10 S\/ FALTO MONTO 150 DEL DÍA 12-11-20",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "338.75",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "657",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "50 pago de PRESTAMO 1000 S\/ SALDO 800",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "653",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "29"
},
{
    "id": "654",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "656",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "655",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "30"
},
{
    "id": "658",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "659",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "150 diasFaltaDescripcion",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "450",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "660",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "661",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "662",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "663",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "100 DESC",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "664",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "665",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "666",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "667",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "668",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "669",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "670",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "671",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "672",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "673",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "674",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "675",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "676",
    "empleadoId": "46",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "193.75",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "677",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "678",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "679",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "681",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "DESC. 50 SOLES PRESTAMO",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "680",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "31"
},
{
    "id": "682",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "683",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "450",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "684",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "685",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "686",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "687",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "688",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "689",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "690",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "691",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "692",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "693",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "694",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "695",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "696",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "697",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "698",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "699",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "700",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "701",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "702",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "703",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "704",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "32"
},
{
    "id": "705",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "706",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "707",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "708",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "709",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "710",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "711",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "712",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "713",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "714",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "715",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "716",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "717",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "718",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "719",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "720",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "721",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "722",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "723",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "724",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "725",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "726",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "727",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "728",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "730",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "733",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "732",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "731",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "729",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "33"
},
{
    "id": "734",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "735",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "736",
    "empleadoId": "12",
    "diasFalta": "2",
    "montoFalta": "166.66",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "737",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "738",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "739",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "740",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "741",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "83.33",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.6",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "742",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "743",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "744",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "745",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "746",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "747",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "748",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "749",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "750",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "751",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "752",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "753",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "754",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "787",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "755",
    "empleadoId": "17",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "756",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "757",
    "empleadoId": "51",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "34"
},
{
    "id": "758",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "759",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "760",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "761",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "762",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "763",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "764",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "765",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "766",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "767",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "768",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "769",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "771",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "772",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "773",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "774",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "775",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "776",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "777",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "778",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "779",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "780",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "781",
    "empleadoId": "48",
    "diasFalta": "1",
    "montoFalta": "80",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "620",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "782",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "783",
    "empleadoId": "17",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "784",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "785",
    "empleadoId": "51",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "786",
    "empleadoId": "52",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "35"
},
{
    "id": "788",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "789",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "790",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "791",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "792",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "793",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "794",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "795",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "796",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "797",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "798",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "799",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "800",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "801",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "802",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "803",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "804",
    "empleadoId": "37",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "805",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "806",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "807",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "808",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "809",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "810",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "811",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "812",
    "empleadoId": "17",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "813",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "814",
    "empleadoId": "51",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "815",
    "empleadoId": "52",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "36"
},
{
    "id": "816",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "817",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "818",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "819",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "820",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "821",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "822",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "823",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "824",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "825",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "826",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "827",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "828",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "829",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "831",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "832",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "834",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "835",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "836",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "837",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "838",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "839",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "840",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "841",
    "empleadoId": "17",
    "diasFalta": "2",
    "montoFalta": "150",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "842",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "843",
    "empleadoId": "51",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "844",
    "empleadoId": "52",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "845",
    "empleadoId": "53",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "878",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "849",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "846",
    "empleadoId": "54",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "848",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "850",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "847",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "37"
},
{
    "id": "851",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "852",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "853",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "854",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "855",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "856",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "857",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "858",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "859",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "860",
    "empleadoId": "23",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "861",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "862",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "863",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "864",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "865",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "866",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "867",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "868",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "869",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "870",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "871",
    "empleadoId": "17",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "872",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "873",
    "empleadoId": "51",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "874",
    "empleadoId": "52",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "875",
    "empleadoId": "53",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "876",
    "empleadoId": "54",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "877",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "38"
},
{
    "id": "879",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "880",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "881",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "882",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "883",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "884",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "885",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "886",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "887",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "888",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "889",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "891",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "892",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "893",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "894",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "895",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "897",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "898",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "899",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "900",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "901",
    "empleadoId": "17",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "902",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "903",
    "empleadoId": "51",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "906",
    "empleadoId": "54",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "907",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "39"
},
{
    "id": "936",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "908",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "909",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "910",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "911",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "912",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "913",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "914",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "915",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "916",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "917",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "918",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "919",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "920",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "921",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "922",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "923",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "924",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "925",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "926",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "927",
    "empleadoId": "48",
    "diasFalta": "1",
    "montoFalta": "80",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "880",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "928",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "929",
    "empleadoId": "17",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "930",
    "empleadoId": "50",
    "diasFalta": "1",
    "montoFalta": "80",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "920",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "931",
    "empleadoId": "51",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "932",
    "empleadoId": "54",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "933",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "40"
},
{
    "id": "935",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "934",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "937",
    "empleadoId": "4",
    "diasFalta": "3",
    "montoFalta": "250",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "938",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "939",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "940",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "941",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "942",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "943",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "944",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "945",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "946",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "947",
    "empleadoId": "34",
    "diasFalta": "2",
    "montoFalta": "166.6",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "948",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "949",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "950",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "951",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "952",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "953",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "954",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "955",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "956",
    "empleadoId": "51",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "957",
    "empleadoId": "54",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "958",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "959",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "961",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "960",
    "empleadoId": "57",
    "diasFalta": "1",
    "montoFalta": "75",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "825",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "41"
},
{
    "id": "962",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "963",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "964",
    "empleadoId": "4",
    "diasFalta": "3",
    "montoFalta": "250",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "965",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "966",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "967",
    "empleadoId": "12",
    "diasFalta": "1",
    "montoFalta": "83.33",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "968",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "969",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "970",
    "empleadoId": "18",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "971",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "972",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "973",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "974",
    "empleadoId": "34",
    "diasFalta": "5",
    "montoFalta": "416.5",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "583.5",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "975",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "976",
    "empleadoId": "39",
    "diasFalta": "1",
    "montoFalta": "91.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1008.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "977",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "978",
    "empleadoId": "44",
    "diasFalta": "1",
    "montoFalta": "66.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "979",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "980",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "981",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "982",
    "empleadoId": "50",
    "diasFalta": "4",
    "montoFalta": "333.32",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "666.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "983",
    "empleadoId": "51",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "984",
    "empleadoId": "54",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "985",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "986",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "987",
    "empleadoId": "57",
    "diasFalta": "2",
    "montoFalta": "150",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "42"
},
{
    "id": "1017",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "988",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "990",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "991",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "992",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "993",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "994",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "995",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "996",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "997",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "999",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1000",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1001",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1002",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1003",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1004",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1005",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "250",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1006",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1007",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1008",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1009",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1010",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1012",
    "empleadoId": "54",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1013",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1014",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1015",
    "empleadoId": "57",
    "diasFalta": "1",
    "montoFalta": "75",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "825",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "43"
},
{
    "id": "1016",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1018",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1019",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1020",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1021",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1022",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1023",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1024",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1025",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1026",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1027",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1028",
    "empleadoId": "34",
    "diasFalta": "1",
    "montoFalta": "83.33",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1029",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1030",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1031",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1032",
    "empleadoId": "44",
    "diasFalta": "2",
    "montoFalta": "133.33",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "666.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1033",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1034",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1035",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1036",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1037",
    "empleadoId": "51",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1038",
    "empleadoId": "54",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1039",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1040",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1041",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "44"
},
{
    "id": "1042",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1043",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1044",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1045",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1046",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1047",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1048",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1049",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1050",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1051",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1052",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1053",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1054",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1055",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1056",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1057",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1058",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1059",
    "empleadoId": "44",
    "diasFalta": "2",
    "montoFalta": "200",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1060",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1061",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1062",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1063",
    "empleadoId": "50",
    "diasFalta": "1",
    "montoFalta": "83.3",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1064",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1065",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1066",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "45"
},
{
    "id": "1067",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1068",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1069",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1070",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1071",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1072",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1073",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1074",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1075",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1076",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1077",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1078",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1079",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1080",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1081",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1082",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1083",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1084",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1085",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1086",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1087",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1088",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1089",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1090",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1091",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "46"
},
{
    "id": "1092",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1093",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1094",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1095",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1096",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1097",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1098",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1099",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1100",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1101",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1102",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1103",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1104",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1105",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1106",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1107",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1108",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1109",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1110",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1111",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1113",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1114",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1115",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1116",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "100",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1117",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1118",
    "empleadoId": "59",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "47"
},
{
    "id": "1119",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1200",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1120",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1121",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1122",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1123",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1124",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1125",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1126",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1127",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1128",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1129",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1130",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1131",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1132",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1133",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1134",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1135",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1136",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1137",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1138",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1139",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1140",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1141",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1142",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1143",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "dscto 100",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1145",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1144",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1146",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1147",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1148",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1149",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1150",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1151",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1152",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1153",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1154",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1155",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1156",
    "empleadoId": "34",
    "diasFalta": "1",
    "montoFalta": "83.33",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1157",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1158",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1159",
    "empleadoId": "39",
    "diasFalta": "8",
    "montoFalta": "733.33",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "366.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1160",
    "empleadoId": "40",
    "diasFalta": "1",
    "montoFalta": "83.33",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "916.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1161",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1162",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1163",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1164",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1165",
    "empleadoId": "50",
    "diasFalta": "6",
    "montoFalta": "500",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1166",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1167",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1168",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "dcto 100",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1169",
    "empleadoId": "59",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1170",
    "empleadoId": "59",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1171",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "49"
},
{
    "id": "1172",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "48"
},
{
    "id": "1173",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1174",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1175",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1176",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1177",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1178",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1179",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1180",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "SE APLICO 50 S\/ COT 08-08-21 PLACA F4Y875",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1181",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1182",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1183",
    "empleadoId": "22",
    "diasFalta": "2",
    "montoFalta": "166.6",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.4",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1184",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1185",
    "empleadoId": "34",
    "diasFalta": "2",
    "montoFalta": "166.6",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833.4",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1186",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1187",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1188",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1189",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1190",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1191",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1192",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1193",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1194",
    "empleadoId": "50",
    "diasFalta": "5",
    "montoFalta": "416.6",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "584",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1195",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1196",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1197",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "dcto 100",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1198",
    "empleadoId": "59",
    "diasFalta": "1",
    "montoFalta": "125",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1375",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1199",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "50"
},
{
    "id": "1201",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1202",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1203",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1204",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1205",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1206",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1207",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1208",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1209",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1210",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1211",
    "empleadoId": "30",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1212",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1213",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1214",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1215",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1216",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1217",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1218",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1219",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1220",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1221",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1222",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1223",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1224",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "dcto 100",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1225",
    "empleadoId": "59",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1226",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "51"
},
{
    "id": "1228",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1227",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1229",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1230",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1231",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1232",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1233",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1234",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1235",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1236",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1237",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1238",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1239",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1240",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1241",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1242",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1243",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1244",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "DCTO 1",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "650",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1245",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1246",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1247",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "Faltante 30 ",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "570",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1248",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1249",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1250",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1251",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "DCTO 1.",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1252",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1253",
    "empleadoId": "59",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "52"
},
{
    "id": "1254",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1255",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1256",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1257",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1258",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1259",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1050",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1260",
    "empleadoId": "12",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1261",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "DCTO 150 por cuenta",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1262",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1263",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1264",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1265",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1266",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1267",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1268",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1269",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1650",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1270",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1271",
    "empleadoId": "44",
    "diasFalta": "2",
    "montoFalta": "133.3",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "666.7",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1272",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1273",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1440",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1274",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1275",
    "empleadoId": "50",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1276",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1277",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1278",
    "empleadoId": "57",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1279",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1280",
    "empleadoId": "59",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "53"
},
{
    "id": "1308",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1281",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1282",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1283",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1284",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1285",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1286",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1287",
    "empleadoId": "12",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "1 de Noviembre",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1288",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1289",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1290",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1291",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "1 de Noviembre",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1292",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1293",
    "empleadoId": "34",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "1 de Noviembre",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1294",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1295",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1296",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1297",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1298",
    "empleadoId": "44",
    "diasFalta": "1",
    "montoFalta": "67",
    "diasFaltaDescripcion": "1 de Noviembre",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1299",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1300",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1301",
    "empleadoId": "49",
    "diasFalta": "1",
    "montoFalta": "50",
    "diasFaltaDescripcion": "Falto 15 nov",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1302",
    "empleadoId": "50",
    "diasFalta": "2",
    "montoFalta": "167",
    "diasFaltaDescripcion": "1 y 2 de Noviembre",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1303",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1304",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1305",
    "empleadoId": "57",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "1 de noviembre",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1306",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1307",
    "empleadoId": "59",
    "diasFalta": "2",
    "montoFalta": "250",
    "diasFaltaDescripcion": "1 y 2 Noviembre",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1250",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "54"
},
{
    "id": "1309",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1310",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1311",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1312",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1313",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1314",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1315",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1316",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1317",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1318",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1319",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1320",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1321",
    "empleadoId": "34",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1322",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1323",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1324",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1325",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1326",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1327",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1328",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1329",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1330",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1331",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1332",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1333",
    "empleadoId": "57",
    "diasFalta": "2",
    "montoFalta": "167",
    "diasFaltaDescripcion": "Dscto prestamo 100",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1334",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1335",
    "empleadoId": "59",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1336",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "55"
},
{
    "id": "1337",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1338",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1339",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1340",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1341",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1342",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1343",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1344",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1345",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1346",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1347",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1348",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1349",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1350",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1351",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1352",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1353",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1354",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1355",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1356",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1357",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1358",
    "empleadoId": "50",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "10 dic",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1359",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1360",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1361",
    "empleadoId": "57",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "Dscto prestamo 100, falta 04 dic",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "817",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1362",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1363",
    "empleadoId": "59",
    "diasFalta": "2",
    "montoFalta": "250",
    "diasFaltaDescripcion": "03 y 04 dic",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1250",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1364",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "56"
},
{
    "id": "1365",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1366",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1367",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1368",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1369",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1370",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1371",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1372",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "DCTO 50 Soles",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "650",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1373",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1374",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1375",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1376",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1377",
    "empleadoId": "34",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1378",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1379",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1380",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1381",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1382",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1383",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1384",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1385",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1386",
    "empleadoId": "50",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "1 falta",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1387",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1388",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1389",
    "empleadoId": "57",
    "diasFalta": "3",
    "montoFalta": "250",
    "diasFaltaDescripcion": "Dscto prestamo 100, faltas 3",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "650",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1390",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1391",
    "empleadoId": "59",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1392",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1394",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1393",
    "empleadoId": "28",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "57"
},
{
    "id": "1395",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1396",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1397",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1398",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1399",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1400",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1401",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "Dscto 50 semanal",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "650",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1402",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1403",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1404",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1405",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1406",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1407",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1408",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1409",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1650",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1410",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1411",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1412",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1414",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1415",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1416",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1417",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "Más 3 guardias noche",
    "bono": "150",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1418",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "Dscto prestamo 100, falta 04 dic",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1419",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1420",
    "empleadoId": "59",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1421",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1422",
    "empleadoId": "28",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "58"
},
{
    "id": "1424",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1423",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1425",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1426",
    "empleadoId": "4",
    "diasFalta": "5",
    "montoFalta": "416.7",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "583.3",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1427",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1428",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1429",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1430",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1431",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1432",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1433",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1434",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1435",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1436",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1437",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1438",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1439",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1440",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1441",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "300",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1443",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1445",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1446",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1447",
    "empleadoId": "57",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "Dscto prestamo 100",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "817",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1448",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1449",
    "empleadoId": "59",
    "diasFalta": "2",
    "montoFalta": "625",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "875",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1450",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "59"
},
{
    "id": "1451",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1452",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1453",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1454",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1455",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1456",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1457",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1458",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1459",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1460",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1461",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1462",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1463",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1464",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1465",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1466",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1467",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1468",
    "empleadoId": "44",
    "diasFalta": "1",
    "montoFalta": "67",
    "diasFaltaDescripcion": "1 falta",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1469",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1471",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1473",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1474",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1475",
    "empleadoId": "57",
    "diasFalta": "167",
    "montoFalta": "2",
    "diasFaltaDescripcion": "Dscto prestamo 100. 2 faltas",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1476",
    "empleadoId": "58",
    "diasFalta": "2",
    "montoFalta": "134",
    "diasFaltaDescripcion": "2 falta",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "666",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1477",
    "empleadoId": "59",
    "diasFalta": "5",
    "montoFalta": "625",
    "diasFaltaDescripcion": "5 faltas",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "875",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1478",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "60"
},
{
    "id": "1507",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1479",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1480",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1481",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1482",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1483",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1484",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1485",
    "empleadoId": "12",
    "diasFalta": "1",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1486",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1487",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1488",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1489",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1490",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1491",
    "empleadoId": "34",
    "diasFalta": "1",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1492",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1493",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1494",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1495",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1496",
    "empleadoId": "44",
    "diasFalta": "1",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1497",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1498",
    "empleadoId": "48",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "960",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1499",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1500",
    "empleadoId": "50",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1501",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1502",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1503",
    "empleadoId": "57",
    "diasFalta": "2",
    "montoFalta": "166",
    "diasFaltaDescripcion": "Dscto prestamo 100",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "734",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1504",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1505",
    "empleadoId": "59",
    "diasFalta": "3",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1125",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1506",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "61"
},
{
    "id": "1508",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1509",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1510",
    "empleadoId": "4",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1511",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1512",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1513",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1514",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1515",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1516",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1517",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "Falto el 15",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1518",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1519",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1520",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1521",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1522",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1523",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1524",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1525",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1527",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1529",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1530",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1531",
    "empleadoId": "57",
    "diasFalta": "12",
    "montoFalta": "1000",
    "diasFaltaDescripcion": "No vino en toda la quincena",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "0",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1532",
    "empleadoId": "58",
    "diasFalta": "1",
    "montoFalta": "67",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1533",
    "empleadoId": "59",
    "diasFalta": "4",
    "montoFalta": "500",
    "diasFaltaDescripcion": "Falto 10, 11, 12 y 14",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1534",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "62"
},
{
    "id": "1535",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1536",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1537",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1538",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1539",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1540",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1541",
    "empleadoId": "12",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "31-03",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1542",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1543",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1544",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1545",
    "empleadoId": "22",
    "diasFalta": "2",
    "montoFalta": "166",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "834",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1546",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1547",
    "empleadoId": "34",
    "diasFalta": "2",
    "montoFalta": "166",
    "diasFaltaDescripcion": "1 falta es de la quincena anterior no se aplicó",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "834",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1548",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1549",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1550",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1551",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1552",
    "empleadoId": "44",
    "diasFalta": "1",
    "montoFalta": "67",
    "diasFaltaDescripcion": "1 falta quincena anterior no se aplico",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1553",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1554",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1555",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1556",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1557",
    "empleadoId": "57",
    "diasFalta": "5",
    "montoFalta": "415",
    "diasFaltaDescripcion": "Dscto prestamo 100, falta 31-03",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "485",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1558",
    "empleadoId": "58",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1559",
    "empleadoId": "59",
    "diasFalta": "5",
    "montoFalta": "750",
    "diasFaltaDescripcion": "31-03, 3 falta de la quincena anterior no se aplicó",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1560",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "63"
},
{
    "id": "1561",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1562",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1563",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1564",
    "empleadoId": "4",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "15-04",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1565",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1566",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1567",
    "empleadoId": "12",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "15-04",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1568",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1569",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1570",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1571",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "15-04",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1572",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1573",
    "empleadoId": "34",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "15-04",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1574",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1575",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1576",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1577",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1578",
    "empleadoId": "44",
    "diasFalta": "1",
    "montoFalta": "67",
    "diasFaltaDescripcion": "15-04",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1579",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1580",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "diasFaltaDescripcion 50 soles por faltante 1\/4",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1581",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1582",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1583",
    "empleadoId": "57",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "Dscto prestamo 100, falta 15-04",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "817",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1585",
    "empleadoId": "59",
    "diasFalta": "8",
    "montoFalta": "1000",
    "diasFaltaDescripcion": "15-04, 13-04,12-04, 11-04, 09-04, 05-04, 06-04, 04-04",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1586",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "64"
},
{
    "id": "1587",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1588",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1589",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1590",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1591",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1592",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1593",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1594",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1595",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1596",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1597",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1598",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1599",
    "empleadoId": "34",
    "diasFalta": "2",
    "montoFalta": "167",
    "diasFaltaDescripcion": "23, 30 de abril",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1600",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1601",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1602",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1603",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1604",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1605",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1606",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "diasFaltaDescripcion 50 2\/4",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1607",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1608",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1609",
    "empleadoId": "57",
    "diasFalta": "2",
    "montoFalta": "167",
    "diasFaltaDescripcion": "21,22 de abril",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "833",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1610",
    "empleadoId": "59",
    "diasFalta": "8",
    "montoFalta": "1000",
    "diasFaltaDescripcion": "16, 19,20,21,22, 25,28,30 de abril",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1611",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "65"
},
{
    "id": "1612",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1613",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1614",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1615",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1616",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1617",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1618",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1619",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1620",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1621",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1622",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "03-05",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1623",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1624",
    "empleadoId": "34",
    "diasFalta": "7",
    "montoFalta": "581",
    "diasFaltaDescripcion": "06,07,09,10,11,12,13 de Mayo",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "419",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1625",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1626",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1627",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1628",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1629",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1630",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1631",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "50",
    "diasFaltaDescripcion": "diasFaltaDescripcion 3\/4",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1632",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1633",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1634",
    "empleadoId": "57",
    "diasFalta": "2",
    "montoFalta": "332",
    "diasFaltaDescripcion": "02,03,04,09 de Mayo",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "668",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1635",
    "empleadoId": "59",
    "diasFalta": "4",
    "montoFalta": "500",
    "diasFaltaDescripcion": "02,04,06,13 de Mayo",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1636",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "66"
},
{
    "id": "1639",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1637",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1638",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1640",
    "empleadoId": "4",
    "diasFalta": "7",
    "montoFalta": "580",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "420",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1641",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1642",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1643",
    "empleadoId": "12",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "25\/05",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1644",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1645",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "Prestamo 400 soles se descuenta apartir prox quincena",
    "bono": "400",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1400",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1646",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1647",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1648",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1649",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1650",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1651",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1652",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1653",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1654",
    "empleadoId": "44",
    "diasFalta": "6",
    "montoFalta": "400",
    "diasFaltaDescripcion": "diasFaltaDescripcion. préstamo 200 de lucho, 100 a cuenta de zinc ",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1655",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1656",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "Decuento 50. 4\/4",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1657",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1658",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1659",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1660",
    "empleadoId": "59",
    "diasFalta": "7",
    "montoFalta": "875",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "625",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1661",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1663",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1662",
    "empleadoId": "62",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "67"
},
{
    "id": "1664",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1665",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1666",
    "empleadoId": "4",
    "diasFalta": "3",
    "montoFalta": "250",
    "diasFaltaDescripcion": "1,2,3 de Junio",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "750",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1667",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1668",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1669",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1670",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1671",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "diasFaltaDescripcion 50 1\/8",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "950",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1672",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1673",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1674",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1675",
    "empleadoId": "34",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "14 de Junio",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1676",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1677",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1678",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1679",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1680",
    "empleadoId": "44",
    "diasFalta": "1",
    "montoFalta": "67",
    "diasFaltaDescripcion": "08 de Junio",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "733",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1681",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1682",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1683",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1684",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1685",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1686",
    "empleadoId": "59",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1687",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1688",
    "empleadoId": "62",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "68"
},
{
    "id": "1690",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1689",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1691",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1692",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1693",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1694",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1695",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1696",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "diasFaltaDescripcion 50 2\/8",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "950",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1697",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1698",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "20-06",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1699",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1700",
    "empleadoId": "34",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "20-06",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1701",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1702",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1703",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1704",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1705",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1706",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1707",
    "empleadoId": "49",
    "diasFalta": "1",
    "montoFalta": "50",
    "diasFaltaDescripcion": "20-06",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1708",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1709",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1716",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1714",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1715",
    "empleadoId": "33",
    "diasFalta": "2",
    "montoFalta": "134",
    "diasFaltaDescripcion": "20,29 de Junio",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "866",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "69"
},
{
    "id": "1717",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1718",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1719",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1720",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1721",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1722",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1723",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1724",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "diasFaltaDescripcion 50 3\/8",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "950",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1725",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1726",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1727",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1728",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1729",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1730",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1731",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1732",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1733",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1734",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1735",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1736",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1737",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1738",
    "empleadoId": "57",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1739",
    "empleadoId": "59",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1740",
    "empleadoId": "61",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1741",
    "empleadoId": "62",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1742",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "70"
},
{
    "id": "1743",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1744",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1745",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1746",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1747",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1748",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1749",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1750",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1751",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "diasFaltaDescripcion 50 4\/8",
    "bono": "PRESTAMO 710",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1660",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1752",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1753",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1754",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1755",
    "empleadoId": "34",
    "diasFalta": "6",
    "montoFalta": "500",
    "diasFaltaDescripcion": "Falta del 18 al 23 de agosto",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1756",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1757",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1758",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1759",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1760",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1761",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1762",
    "empleadoId": "49",
    "diasFalta": "1",
    "montoFalta": "50",
    "diasFaltaDescripcion": "29-07",
    "bono": "Repuso el día 2do turno paradero 2",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1763",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1764",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1765",
    "empleadoId": "33",
    "diasFalta": "4",
    "montoFalta": "333",
    "diasFaltaDescripcion": "27,28,29 y 30 Julio",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "667",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1766",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1767",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1768",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1769",
    "empleadoId": "4",
    "diasFalta": "2",
    "montoFalta": "166",
    "diasFaltaDescripcion": "06-08, 13-08",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "834",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1770",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1771",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1772",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1773",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1774",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "DESC 50 5\/8 Y DESC 50 1\/14 TOTAL diasFaltaDescripcion 100",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1775",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1776",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "13-08",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1777",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1778",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1779",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1780",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1781",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1782",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1783",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1784",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1785",
    "empleadoId": "49",
    "diasFalta": "1",
    "montoFalta": "50",
    "diasFaltaDescripcion": "15-08",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "550",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1786",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1787",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1788",
    "empleadoId": "33",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "04-08",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1814",
    "empleadoId": "63",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "71"
},
{
    "id": "1789",
    "empleadoId": "63",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "O",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "72"
},
{
    "id": "1790",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1791",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1792",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1793",
    "empleadoId": "4",
    "diasFalta": "7",
    "montoFalta": "583",
    "diasFaltaDescripcion": "22,23,24,25,26,27,Y 29 DE AGOSTO",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "417",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1794",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1795",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1796",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1797",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1798",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "DESC 50 6\/8 Y DESC 50 2\/14 TOTAL diasFaltaDescripcion 100",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1799",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1800",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "30 DE AGOSTO",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1801",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1802",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1803",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1804",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1805",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1806",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1807",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1808",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1809",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1810",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1811",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1812",
    "empleadoId": "33",
    "diasFalta": "1",
    "montoFalta": "83",
    "diasFaltaDescripcion": "30 DE AGOSTO",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "917",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1813",
    "empleadoId": "63",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "73"
},
{
    "id": "1816",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1815",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1817",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1818",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1819",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1820",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1821",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1822",
    "empleadoId": "13",
    "diasFalta": "2",
    "montoFalta": "108",
    "diasFaltaDescripcion": "05 y 06 de Sep",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "592",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1823",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "DESC 50 7\/8 Y DESC 50 3\/14 TOTAL diasFaltaDescripcion 100",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1824",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1825",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1826",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1827",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1828",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1829",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1830",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1831",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1832",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1833",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1834",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1835",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1836",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1837",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1838",
    "empleadoId": "63",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "74"
},
{
    "id": "1889",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1839",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1840",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1841",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1842",
    "empleadoId": "4",
    "diasFalta": "7",
    "montoFalta": "538",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "461",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1843",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1844",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1845",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1846",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1847",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "DESC 50 8\/8 Y DESC 50 4\/14 TOTAL diasFaltaDescripcion 100",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "900",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1848",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1849",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1850",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1851",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1852",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1853",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1854",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1855",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1856",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1857",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1858",
    "empleadoId": "49",
    "diasFalta": "2",
    "montoFalta": "46",
    "diasFaltaDescripcion": "Se aplico 60 soles a su quincena por faltante el 18-09. Falto 19-09",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "554",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1859",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1860",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1861",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1862",
    "empleadoId": "63",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1863",
    "empleadoId": "52",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "75"
},
{
    "id": "1864",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1865",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1866",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1867",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1868",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1869",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1870",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1871",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1872",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "DESC 50 5\/14",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "950",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1873",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1874",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1875",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1876",
    "empleadoId": "34",
    "diasFalta": "1",
    "montoFalta": "77",
    "diasFaltaDescripcion": "05-10",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "923",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1877",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1878",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1879",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1880",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1881",
    "empleadoId": "44",
    "diasFalta": "1",
    "montoFalta": "77",
    "diasFaltaDescripcion": "11-10",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "923",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1882",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1883",
    "empleadoId": "49",
    "diasFalta": "1",
    "montoFalta": "46",
    "diasFaltaDescripcion": "05-10",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "554",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1884",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1885",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1886",
    "empleadoId": "33",
    "diasFalta": "1",
    "montoFalta": "77",
    "diasFaltaDescripcion": "05-10",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "923",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1887",
    "empleadoId": "63",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1888",
    "empleadoId": "52",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "76"
},
{
    "id": "1892",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1915",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1890",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1891",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1893",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1894",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1895",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1896",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1897",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "DESC 50 6\/14",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "950",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1898",
    "empleadoId": "19",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1899",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1900",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1901",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1902",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1903",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1904",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1905",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1906",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1907",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1908",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1909",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1910",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1911",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1912",
    "empleadoId": "63",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1913",
    "empleadoId": "52",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "77"
},
{
    "id": "1916",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1914",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1940",
    "empleadoId": "1",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1917",
    "empleadoId": "4",
    "diasFalta": "1",
    "montoFalta": "77",
    "diasFaltaDescripcion": "12-11",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "923",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1918",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1919",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1920",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1921",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1922",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "DESC 50 7\/14",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "950",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1923",
    "empleadoId": "19",
    "diasFalta": "3",
    "montoFalta": "184.6",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "615.4",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1924",
    "empleadoId": "22",
    "diasFalta": "1",
    "montoFalta": "77",
    "diasFaltaDescripcion": "12-11",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "923",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1925",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1926",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1927",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1928",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1929",
    "empleadoId": "39",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1100",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1930",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1931",
    "empleadoId": "44",
    "diasFalta": "1",
    "montoFalta": "77",
    "diasFaltaDescripcion": "12-11",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "923",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1932",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1933",
    "empleadoId": "49",
    "diasFalta": "1",
    "montoFalta": "46",
    "diasFaltaDescripcion": "07-11",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "553",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1934",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1935",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "300",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1936",
    "empleadoId": "33",
    "diasFalta": "3",
    "montoFalta": "230",
    "diasFaltaDescripcion": "05-11, 07-11 y 08-11",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "770",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1937",
    "empleadoId": "63",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "115",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1938",
    "empleadoId": "52",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1939",
    "empleadoId": "41",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "300",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "78"
},
{
    "id": "1941",
    "empleadoId": "2",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1942",
    "empleadoId": "3",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1943",
    "empleadoId": "4",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1944",
    "empleadoId": "6",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1945",
    "empleadoId": "7",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1946",
    "empleadoId": "12",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1947",
    "empleadoId": "13",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1948",
    "empleadoId": "16",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "DESC 50 8\/14",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "950",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1949",
    "empleadoId": "19",
    "diasFalta": "9",
    "montoFalta": "554",
    "diasFaltaDescripcion": "Del 20 al 30 nov",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "246",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1950",
    "empleadoId": "22",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1951",
    "empleadoId": "60",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1952",
    "empleadoId": "34",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1953",
    "empleadoId": "35",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1954",
    "empleadoId": "38",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1955",
    "empleadoId": "39",
    "diasFalta": "2",
    "montoFalta": "180",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "920",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1956",
    "empleadoId": "40",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1957",
    "empleadoId": "44",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1958",
    "empleadoId": "45",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1959",
    "empleadoId": "49",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1960",
    "empleadoId": "55",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "800",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1961",
    "empleadoId": "56",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "600",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1962",
    "empleadoId": "33",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "1000",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1963",
    "empleadoId": "63",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "500",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1964",
    "empleadoId": "52",
    "diasFalta": "0",
    "diaSalario": "0",
    "montoFalta": "0",
    "diasFaltaDescripcion": "0",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "700",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
{
    "id": "1965",
    "empleadoId": "41",
    "diasFalta": "1",
    "montoFalta": "46",
    "diasFaltaDescripcion": "26-11",
    "bono": "0",
    "dctoPrestamoIds": "0",
    "dctoPrestamoTotal": "0",
    "totalPago": "554",
    
    createdAt: now, updatedAt: now,
    "quincenaId": "79"
},
  ]);
},
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Nominas', null, {});
    }
};            
