'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date();
        await queryInterface.bulkInsert('Detbusgastos', [
{
    
    "reproductoId": "17",
    "cant": "1",
    "costoUni": "250",
    "total": "250",
    "busgastoId": "62",
    "unidadId": "34",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "35",
    "cant": "1",
    "costoUni": "450",
    "total": "450",
    "busgastoId": "67",
    "unidadId": "30",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "15",
    "cant": "1",
    "costoUni": "1500",
    "total": "1500",
    "busgastoId": "69",
    "unidadId": "38",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "491",
    "cant": "1",
    "costoUni": "300",
    "total": "300",
    "busgastoId": "65",
    "unidadId": "276",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "28",
    "cant": "2",
    "costoUni": "14",
    "total": "14",
    "busgastoId": "72",
    "unidadId": "297",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "293",
    "cant": "1",
    "costoUni": "10",
    "total": "10",
    "busgastoId": "73",
    "unidadId": "302",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "379",
    "cant": "1",
    "costoUni": "45",
    "total": "45",
    "busgastoId": "75",
    "unidadId": "22",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "1045",
    "cant": "1",
    "costoUni": "70",
    "total": "70",
    "busgastoId": "75",
    "unidadId": "22",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "1044",
    "cant": "1",
    "costoUni": "70",
    "total": "70",
    "busgastoId": "75",
    "unidadId": "22",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "493",
    "cant": "1",
    "costoUni": "160",
    "total": "160",
    "busgastoId": "75",
    "unidadId": "22",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "491",
    "cant": "1",
    "costoUni": "300",
    "total": "300",
    "busgastoId": "76",
    "unidadId": "270",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "13",
    "cant": "1",
    "costoUni": "411",
    "total": "411",
    "busgastoId": "77",
    "unidadId": "27",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "10",
    "cant": "1",
    "costoUni": "411",
    "total": "411",
    "busgastoId": "78",
    "unidadId": "35",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "8",
    "cant": "1",
    "costoUni": "250",
    "total": "250",
    "busgastoId": "82",
    "unidadId": "36",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "171",
    "cant": "1",
    "costoUni": "1250",
    "total": "1250",
    "busgastoId": "84",
    "unidadId": "31",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
{
    
    "reproductoId": "5",
    "cant": "1",
    "costoUni": "2500",
    "total": "2500",
    "busgastoId": "85",
    "unidadId": "26",
    "fecha": "2022-11-30",
    createdAt: now, updatedAt: now,
},
]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Detbusgastos', null, {});

    }
};            