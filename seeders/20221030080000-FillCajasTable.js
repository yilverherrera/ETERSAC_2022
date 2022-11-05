
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let now = new Date().toISOString().split('T')[0];
        await queryInterface.bulkInsert('Cajas', [
            {
		 	busInEfe: 0,
            busInCpc: 0,
            busInBan: 0,  
            busInAnt: 0,  
            vtaInEfe: 0,                      
            vtaInCpc: 0,  
            vtaInCon: 0,   
            vtaInBan: 0,    
            vtaInAnt: 0, 
            busEgEfe: 0,     
            busEgBan: 0,     
            gasAdmEfe: 0,           
            busCpp: 0,           
            gasPpSal: 0,      
            impIgv: 0,           
            vtaEgCon: 0, 
            gasPpCom: 0,
            neto: 0,  
            pagCppEfe: 0, 
            pagSalEfe: 0,   
            cpcPresEfec: 0, 
            antTerEfe: 0, 
            antVtaEfec: 0, 
            devTerEfe: 0,  
            pagPresEfe: 0, 
            salIni: 0,   
            retEfe: 0,            
            fecha: now,
            createdAt: new Date(), 
            updatedAt: new Date(),
            authorId: 1,
            despachoId: 1,
            routId: 1,
            }
        ]);

},

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('Cajas', null, {});

    }
};
