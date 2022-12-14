'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Pagoproveedors', [
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-10",
    createdAt: now, updatedAt: now,
    "proveedorId": "4",
    "tasa": "02.31",
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
    "fecha": "2019-11-10",
    createdAt: now, updatedAt: now,
    "proveedorId": "10",
    "tasa": "02.54",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2425",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-11",
    createdAt: now, updatedAt: now,
    "proveedorId": "65",
    "tasa": "16.33",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2589",
},
{
    "observaciones": "",
    "efectivo": "193",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-11",
    createdAt: now, updatedAt: now,
    "proveedorId": "11",
    "tasa": "19.06",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2600",
},
{
    "observaciones": "",
    "efectivo": "193",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-11",
    createdAt: now, updatedAt: now,
    "proveedorId": "11",
    "tasa": "19.06",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2598",
},
{
    "observaciones": "",
    "efectivo": "193",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-11",
    createdAt: now, updatedAt: now,
    "proveedorId": "11",
    "tasa": "19.07",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2601",
},
{
    "observaciones": "",
    "efectivo": "86",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-11",
    createdAt: now, updatedAt: now,
    "proveedorId": "68",
    "tasa": "11.20",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2624",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-12",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "16.49",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2083",
},
{
    "observaciones": "",
    "efectivo": "1500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-12",
    createdAt: now, updatedAt: now,
    "proveedorId": "11",
    "tasa": "02.50",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2659",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-13",
    createdAt: now, updatedAt: now,
    "proveedorId": "65",
    "tasa": "15.53",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2589",
},
{
    "observaciones": "",
    "efectivo": "431.62",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-13",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "16.48",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2235",
},
{
    "observaciones": "",
    "efectivo": "603",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-13",
    createdAt: now, updatedAt: now,
    "proveedorId": "11",
    "tasa": "17.11",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2659",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-13",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "18.20",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2083",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-13",
    createdAt: now, updatedAt: now,
    "proveedorId": "5",
    "tasa": "03.34",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "496",
},
{
    "observaciones": "",
    "efectivo": "150",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-13",
    createdAt: now, updatedAt: now,
    "proveedorId": "13",
    "tasa": "04.15",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2677",
},
{
    "observaciones": "",
    "efectivo": "1013",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-14",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "13.52",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2380",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-14",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "16.11",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2083",
},
{
    "observaciones": "",
    "efectivo": "150",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-14",
    createdAt: now, updatedAt: now,
    "proveedorId": "13",
    "tasa": "21.50",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2677",
},
{
    "observaciones": "",
    "efectivo": "220",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-14",
    createdAt: now, updatedAt: now,
    "proveedorId": "10",
    "tasa": "21.53",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2425",
},
{
    "observaciones": "",
    "efectivo": "350",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-14",
    createdAt: now, updatedAt: now,
    "proveedorId": "10",
    "tasa": "21.53",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2427",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-15",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "14.20",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2235",
},
{
    "observaciones": "",
    "efectivo": "550",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-15",
    createdAt: now, updatedAt: now,
    "proveedorId": "57",
    "tasa": "18.43",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2731",
},
{
    "observaciones": "",
    "efectivo": "300",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-16",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "16.33",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2083",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-16",
    createdAt: now, updatedAt: now,
    "proveedorId": "32",
    "tasa": "18.12",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2760",
},
{
    "observaciones": "",
    "efectivo": "310",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-17",
    createdAt: now, updatedAt: now,
    "proveedorId": "10",
    "tasa": "05.45",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2424",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-17",
    createdAt: now, updatedAt: now,
    "proveedorId": "5",
    "tasa": "03.34",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "156",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-18",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "11.49",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2451",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-18",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "13.59",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2083",
},
{
    "observaciones": "",
    "efectivo": "900",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-18",
    createdAt: now, updatedAt: now,
    "proveedorId": "36",
    "tasa": "14.15",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "189",
},
{
    "observaciones": "",
    "efectivo": "460",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-18",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "17.05",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2235",
},
{
    "observaciones": "",
    "efectivo": "90",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-18",
    createdAt: now, updatedAt: now,
    "proveedorId": "25",
    "tasa": "18.38",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "275",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-18",
    createdAt: now, updatedAt: now,
    "proveedorId": "4",
    "tasa": "03.48",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "161",
},
{
    "observaciones": "",
    "efectivo": "100",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-19",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "16.51",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2083",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-19",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "17.28",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2826",
},
{
    "observaciones": "",
    "efectivo": "400",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-20",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "12.30",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2235",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-20",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "16.16",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2083",
},
{
    "observaciones": "",
    "efectivo": "8",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-20",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "17.43",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2861",
},
{
    "observaciones": "",
    "efectivo": "140",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-20",
    createdAt: now, updatedAt: now,
    "proveedorId": "69",
    "tasa": "17.44",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2881",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-20",
    createdAt: now, updatedAt: now,
    "proveedorId": "5",
    "tasa": "03.34",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "156",
},
{
    "observaciones": "",
    "efectivo": "255",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-20",
    createdAt: now, updatedAt: now,
    "proveedorId": "28",
    "tasa": "03.04",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2876",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-21",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "15.26",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2826",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-21",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "16.59",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2882",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-21",
    createdAt: now, updatedAt: now,
    "proveedorId": "1",
    "tasa": "17.45",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "494",
},
{
    "observaciones": "",
    "efectivo": "94",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-21",
    createdAt: now, updatedAt: now,
    "proveedorId": "69",
    "tasa": "19.24",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2881",
},
{
    "observaciones": "",
    "efectivo": "418",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-21",
    createdAt: now, updatedAt: now,
    "proveedorId": "27",
    "tasa": "19.38",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2885",
},
{
    "observaciones": "",
    "efectivo": "30",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-21",
    createdAt: now, updatedAt: now,
    "proveedorId": "52",
    "tasa": "19.44",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2890",
},
{
    "observaciones": "",
    "efectivo": "65",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-21",
    createdAt: now, updatedAt: now,
    "proveedorId": "14",
    "tasa": "20.07",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2895",
},
{
    "observaciones": "",
    "efectivo": "490",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-22",
    createdAt: now, updatedAt: now,
    "proveedorId": "11",
    "tasa": "15.21",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "94",
},
{
    "observaciones": "",
    "efectivo": "322",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-22",
    createdAt: now, updatedAt: now,
    "proveedorId": "32",
    "tasa": "16.44",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2760",
},
{
    "observaciones": "",
    "efectivo": "150",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-22",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "16.58",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2083",
},
{
    "observaciones": "",
    "efectivo": "409.24",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-22",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "17.33",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2882",
},
{
    "observaciones": "",
    "efectivo": "150",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-22",
    createdAt: now, updatedAt: now,
    "proveedorId": "14",
    "tasa": "19.06",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2923",
},
{
    "observaciones": "",
    "efectivo": "12",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-22",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "19.07",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2922",
},
{
    "observaciones": "",
    "efectivo": "60",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-22",
    createdAt: now, updatedAt: now,
    "proveedorId": "20",
    "tasa": "19.15",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2927",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-23",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "16.30",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2882",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-23",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "17.35",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2083",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-23",
    createdAt: now, updatedAt: now,
    "proveedorId": "36",
    "tasa": "17.47",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2419",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-24",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "12.26",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2451",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-24",
    createdAt: now, updatedAt: now,
    "proveedorId": "5",
    "tasa": "03.31",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "156",
},
{
    "observaciones": "",
    "efectivo": "150",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-25",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "18.01",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2083",
},
{
    "observaciones": "",
    "efectivo": "14",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-25",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "18.20",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2969",
},
{
    "observaciones": "",
    "efectivo": "602",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-26",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "11.25",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2451",
},
{
    "observaciones": "",
    "efectivo": "100",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-26",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "16.25",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2083",
},
{
    "observaciones": "",
    "efectivo": "10",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-26",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "18.33",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3003",
},
{
    "observaciones": "",
    "efectivo": "70",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-26",
    createdAt: now, updatedAt: now,
    "proveedorId": "41",
    "tasa": "18.50",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3014",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-26",
    createdAt: now, updatedAt: now,
    "proveedorId": "5",
    "tasa": "03.34",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2987",
},
{
    "observaciones": "",
    "efectivo": "230",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-26",
    createdAt: now, updatedAt: now,
    "proveedorId": "48",
    "tasa": "04.42",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3035",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-27",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "12.41",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2882",
},
{
    "observaciones": "",
    "efectivo": "150",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-27",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "16.26",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2826",
},
{
    "observaciones": "",
    "efectivo": "82.9",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-27",
    createdAt: now, updatedAt: now,
    "proveedorId": "33",
    "tasa": "18.16",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3049",
},
{
    "observaciones": "",
    "efectivo": "150",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-28",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "17.19",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2826",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-28",
    createdAt: now, updatedAt: now,
    "proveedorId": "1",
    "tasa": "18.00",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "495",
},
{
    "observaciones": "",
    "efectivo": "140",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-28",
    createdAt: now, updatedAt: now,
    "proveedorId": "65",
    "tasa": "19.05",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3087",
},
{
    "observaciones": "",
    "efectivo": "80",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-28",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "19.08",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3088",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-28",
    createdAt: now, updatedAt: now,
    "proveedorId": "4",
    "tasa": "02.55",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "161",
},
{
    "observaciones": "",
    "efectivo": "100",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-29",
    createdAt: now, updatedAt: now,
    "proveedorId": "37",
    "tasa": "14.21",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3102",
},
{
    "observaciones": "",
    "efectivo": "150",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-29",
    createdAt: now, updatedAt: now,
    "proveedorId": "14",
    "tasa": "18.51",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3108",
},
{
    "observaciones": "",
    "efectivo": "30",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-29",
    createdAt: now, updatedAt: now,
    "proveedorId": "42",
    "tasa": "19.15",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3109",
},
{
    "observaciones": "",
    "efectivo": "150",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-29",
    createdAt: now, updatedAt: now,
    "proveedorId": "10",
    "tasa": "06.02",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2424",
},
{
    "observaciones": "",
    "efectivo": "140",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-30",
    createdAt: now, updatedAt: now,
    "proveedorId": "65",
    "tasa": "15.32",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3087",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-11-30",
    createdAt: now, updatedAt: now,
    "proveedorId": "50",
    "tasa": "17.51",
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
    "fecha": "2019-11-30",
    createdAt: now, updatedAt: now,
    "proveedorId": "50",
    "tasa": "17.52",
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
    "fecha": "2019-12-01",
    createdAt: now, updatedAt: now,
    "proveedorId": "5",
    "tasa": "03.34",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2987",
},
{
    "observaciones": "",
    "efectivo": "1000",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-02",
    createdAt: now, updatedAt: now,
    "proveedorId": "21",
    "tasa": "13.50",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2964",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-02",
    createdAt: now, updatedAt: now,
    "proveedorId": "36",
    "tasa": "17.46",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2419",
},
{
    "observaciones": "",
    "efectivo": "1046.4",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-02",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "17.47",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3279",
},
{
    "observaciones": "",
    "efectivo": "15",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-02",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "18.23",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3165",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-02",
    createdAt: now, updatedAt: now,
    "proveedorId": "44",
    "tasa": "18.44",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3167",
},
{
    "observaciones": "",
    "efectivo": "131",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-03",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "16.40",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2826",
},
{
    "observaciones": "",
    "efectivo": "29.1",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-03",
    createdAt: now, updatedAt: now,
    "proveedorId": "49",
    "tasa": "18.29",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3204",
},
{
    "observaciones": "",
    "efectivo": "352.3",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-03",
    createdAt: now, updatedAt: now,
    "proveedorId": "49",
    "tasa": "18.30",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3205",
},
{
    "observaciones": "",
    "efectivo": "50",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-03",
    createdAt: now, updatedAt: now,
    "proveedorId": "69",
    "tasa": "18.35",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3207",
},
{
    "observaciones": "",
    "efectivo": "53",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-03",
    createdAt: now, updatedAt: now,
    "proveedorId": "25",
    "tasa": "18.37",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3208",
},
{
    "observaciones": "",
    "efectivo": "12",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-03",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "18.51",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3211",
},
{
    "observaciones": "",
    "efectivo": "25",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-03",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "18.51",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3210",
},
{
    "observaciones": "",
    "efectivo": "352.3",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-03",
    createdAt: now, updatedAt: now,
    "proveedorId": "49",
    "tasa": "19.01",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3213",
},
{
    "observaciones": "",
    "efectivo": "300",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-04",
    createdAt: now, updatedAt: now,
    "proveedorId": "32",
    "tasa": "14.42",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2760",
},
{
    "observaciones": "",
    "efectivo": "200",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-04",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "16.41",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2826",
},
{
    "observaciones": "",
    "efectivo": "600",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-04",
    createdAt: now, updatedAt: now,
    "proveedorId": "25",
    "tasa": "19.36",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3245",
},
{
    "observaciones": "",
    "efectivo": "50",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-04",
    createdAt: now, updatedAt: now,
    "proveedorId": "41",
    "tasa": "19.36",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3246",
},
{
    "observaciones": "",
    "efectivo": "140",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-04",
    createdAt: now, updatedAt: now,
    "proveedorId": "10",
    "tasa": "20.05",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3247",
},
{
    "observaciones": "",
    "efectivo": "9",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-04",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "20.09",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3249",
},
{
    "observaciones": "",
    "efectivo": "300",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-04",
    createdAt: now, updatedAt: now,
    "proveedorId": "14",
    "tasa": "04.40",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3268",
},
{
    "observaciones": "",
    "efectivo": "1500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-04",
    createdAt: now, updatedAt: now,
    "proveedorId": "5",
    "tasa": "03.34",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2883",
},
{
    "observaciones": "",
    "efectivo": "144",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-05",
    createdAt: now, updatedAt: now,
    "proveedorId": "37",
    "tasa": "13.34",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3278",
},
{
    "observaciones": "",
    "efectivo": "26",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-05",
    createdAt: now, updatedAt: now,
    "proveedorId": "42",
    "tasa": "13.34",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3277",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-05",
    createdAt: now, updatedAt: now,
    "proveedorId": "11",
    "tasa": "14.23",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "93",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-05",
    createdAt: now, updatedAt: now,
    "proveedorId": "7",
    "tasa": "16.57",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3383",
},
{
    "observaciones": "",
    "efectivo": "7",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-05",
    createdAt: now, updatedAt: now,
    "proveedorId": "15",
    "tasa": "18.53",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3282",
},            
{
    "observaciones": "",
    "efectivo": "40",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-05",
    createdAt: now, updatedAt: now,
    "proveedorId": "38",
    "tasa": "19.16",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3289",
},
{
    "observaciones": "",
    "efectivo": "5",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-05",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "19.23",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3290",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-05",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "19.25",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3291",
},
{
    "observaciones": "",
    "efectivo": "58",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-06",
    createdAt: now, updatedAt: now,
    "proveedorId": "4",
    "tasa": "15.48",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3329",
},
{
    "observaciones": "",
    "efectivo": "80",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-06",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "16.10",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3331",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-06",
    createdAt: now, updatedAt: now,
    "proveedorId": "39",
    "tasa": "16.10",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3291",
},
{
    "observaciones": "",
    "efectivo": "93",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-06",
    createdAt: now, updatedAt: now,
    "proveedorId": "11",
    "tasa": "20.11",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3340",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-06",
    createdAt: now, updatedAt: now,
    "proveedorId": "5",
    "tasa": "03.34",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "2987",
},
{
    "observaciones": "",
    "efectivo": "500",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-07",
    createdAt: now, updatedAt: now,
    "proveedorId": "1",
    "tasa": "13.06",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "494",
},
{
    "observaciones": "",
    "efectivo": "4.5",
    "banco": "0",
    "fueradCaja": "0",
    "dollar": "0",
    "fecha": "2019-12-07",
    createdAt: now, updatedAt: now,
    "proveedorId": "18",
    "tasa": "15.18",
    "estatus": "1",
    "cajaId": "1",
    "busgastoId": "3357",
},


]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Pagoproveedors', null, {});

    }
};
