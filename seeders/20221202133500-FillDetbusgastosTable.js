'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Detbusgastos', [
{
    
    "reproductoId": "1550",
    "cant": "1",
    "costoUni": "1224",
    "total": "1224",
    "busgastoId": "9191",
    "unidadId": "35",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "95",
    "cant": "1",
    "costoUni": "126",
    "total": "126",
    "busgastoId": "9195",
    "unidadId": "35",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "1210",
    "cant": "1",
    "costoUni": "103",
    "total": "103",
    "busgastoId": "9196",
    "unidadId": "284",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "1853",
    "cant": "1",
    "costoUni": "8",
    "total": "8",
    "busgastoId": "9196",
    "unidadId": "284",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "1132",
    "cant": "20",
    "costoUni": "2",
    "total": "2",
    "busgastoId": "9197",
    "unidadId": "284",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "1132",
    "cant": "18",
    "costoUni": "2",
    "total": "2",
    "busgastoId": "9198",
    "unidadId": "285",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "843",
    "cant": "1",
    "costoUni": "30",
    "total": "30",
    "busgastoId": "9201",
    "unidadId": "32",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "918",
    "cant": "1",
    "costoUni": "35",
    "total": "35",
    "busgastoId": "9203",
    "unidadId": "35",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "95",
    "cant": "1",
    "costoUni": "80",
    "total": "80",
    "busgastoId": "9207",
    "unidadId": "286",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "327",
    "cant": "1",
    "costoUni": "36",
    "total": "36",
    "busgastoId": "9208",
    "unidadId": "306",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "1870",
    "cant": "1",
    "costoUni": "700",
    "total": "700",
    "busgastoId": "9209",
    "unidadId": "289",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "1086",
    "cant": "1",
    "costoUni": "135",
    "total": "135",
    "busgastoId": "9210",
    "unidadId": "289",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "1400",
    "cant": "1",
    "costoUni": "230",
    "total": "230",
    "busgastoId": "9211",
    "unidadId": "29",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "940",
    "cant": "1",
    "costoUni": "644",
    "total": "644",
    "busgastoId": "9212",
    "unidadId": "270",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "95",
    "cant": "2",
    "costoUni": "40",
    "total": "40",
    "busgastoId": "9213",
    "unidadId": "39",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "1730",
    "cant": "1",
    "costoUni": "20",
    "total": "20",
    "busgastoId": "9214",
    "unidadId": "22",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Detbusgastos', null, {});

    }
};            