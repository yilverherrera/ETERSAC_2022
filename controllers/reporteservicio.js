const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const moment = require("moment");
const excelJS = require("exceljs");

// GET /reportes/new
exports.new = async (req, res, next) => {

    const unidads = await models.Unidad.findAll();

    const reporte =
    {
        mes: "",
        unidadId: "",
    };

    res.render('reportes/servicios/new', { reporte, unidads});

};

exports.index = async (req, res, next) =>  {
    const { serviceId, fecha, unidadId} = req.query;
    const startOfMonth = moment(fecha).clone().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment(fecha).clone().endOf('month').format('YYYY-MM-DD');
    const service = await models.Service.findByPk(serviceId);
    let switchVlta = false;
    if (service.vuelta === true && unidadId !== ''){
        switchVlta = true;
    }

    let findOptions = {
        where:{
            fecha:{
                [Op.gte]: startOfMonth,
                [Op.lte]: endOfMonth,
            }
        },
        include:[],
    }

    if (unidadId !== '') {
        findOptions.where.unidadId = unidadId;
    }

    if (switchVlta === false) { 

        findOptions.include.push({
            model: models.Unidad,
            as: "pertUniSer",
        });
        findOptions.include.push({
            model: models.Caja,
            as: "pertCajSer",
            include:[{
                model: models.User,
                as: "author",
            }]
        });

        findOptions.where.serviceId = serviceId;

    } else {
     findOptions.include.push({
        model: models.Servbus,
        as: "pertSerVue",
        include:[{
            model: models.Caja,
            as: "pertCajSer",
            include:[
            {
                model: models.Despacho,
                as: "pertDesCaj",
            }
            ]
        }]
    });

 }




 try{

    if (switchVlta === false) { 
        const reporteServBus = await models.Servbus.findAll(findOptions);
        res.json(reporteServBus);

    } else {
        const reportVlta = await models.Vuelt.findAll(findOptions);
        const catVlta = await models.Catvuelt.findAll();
        const inicio = new Date(startOfMonth);
        const fin = new Date(endOfMonth);
         const INTERVALO = 1000 * 60 * 60 * 24;; // Cada dia
         let reporteServBus = [];
         for (let i = inicio; i <= fin; i = new Date(i.getTime() + INTERVALO)) {
            let total = 0;
            let vlta = [];
            let color = [];
            const fechaDia = i.toISOString().split('T')[0]
            catVlta.forEach((catId) => {
                const Arrvlta = reportVlta.findIndex( (vta, index) => vta.fecha === fechaDia && vta.catvueltId === catId.id);
                const vuelta = Arrvlta !== -1 ? reportVlta[Arrvlta].pertSerVue.efectivo : 0;
                const colr = Arrvlta !== -1 ? reportVlta[Arrvlta].pertSerVue.pertCajSer.pertDesCaj.color : "";
                vlta.push(vuelta);
                color.push(colr);
                total += vuelta;
            });

            
            reporteServBus.push( {
                "fecha": fechaDia,
                "vlta": vlta,
                "color": color,
                "total": total,
            });
        }


        res.json(reporteServBus);



    }

    
}catch(error){

}
}


exports.downloadExcel = async (req, res ,next) => {
    const { serviceId, fecha, unidadId} = req.query;
    const startOfMonth = moment(fecha).clone().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment(fecha).clone().endOf('month').format('YYYY-MM-DD');
    const service = await models.Service.findByPk(serviceId);
    let switchVlta = false;
    if (service.vuelta === true && unidadId !== ''){
        switchVlta = true;
    }

    let findOptions = {
        where:{
            fecha:{
                [Op.gte]: startOfMonth,
                [Op.lte]: endOfMonth,
            }
        },
        include:[],
    }

    if (unidadId !== '') {
        findOptions.where.unidadId = unidadId;
    }

    if (switchVlta === false) { 

        findOptions.include.push({
            model: models.Unidad,
            as: "pertUniSer",
        });
        findOptions.include.push({
            model: models.Caja,
            as: "pertCajSer",
            include:[{
                model: models.User,
                as: "author",
            }]
        });

        findOptions.where.serviceId = serviceId;

    } else {
     findOptions.include.push({
        model: models.Servbus,
        as: "pertSerVue",
        include:[{
            model: models.Caja,
            as: "pertCajSer",
            include:[
            {
                model: models.Despacho,
                as: "pertDesCaj",
            }
            ]
        }]
    });

 }


    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet("Servicios");
    const path = "./files";


    if (switchVlta === false) { 
        
        const reporteServBus = await models.Servbus.findAll(findOptions).map( (report) =>  {
            return{
                autor: report.pertCajSer.author.username,
                pd: report.pertUniSer.placa,
                fechaCaja: report.fechaCaja,
                fecha: report.fecha,
                monto: report.efectivo,
            }
        });
        
    worksheet.columns = [
        { header: "S no.", key: "s_no", width: 10 },
        { header: "Autor", key: "autor", width: 20 },
        { header: "Placa", key: "pd", width: 10 },
        { header: "Fecha de Caja", key: "fechaCaja", width: 20 },
        { header: "Fecha a Aplicar", key: "fecha", width: 20 },
        { header: "Monto", key: "monto", width: 10 },
        ];

    let counter = 1;

    reporteServBus.forEach((srv) => {
        srv.s_no = counter;
        worksheet.addRow(srv);
        counter++;
    });

    worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
    });

    } else {
        const reportVlta = await models.Vuelt.findAll(findOptions);
        const catVlta = await models.Catvuelt.findAll();
        const inicio = new Date(startOfMonth);
        const fin = new Date(endOfMonth);
         const INTERVALO = 1000 * 60 * 60 * 24;; // Cada dia
         let reporteServBus = [];
         for (let i = inicio; i <= fin; i = new Date(i.getTime() + INTERVALO)) {
            let total = 0;
            let vlta = [];
            let color = [];
            const fechaDia = i.toISOString().split('T')[0]
            catVlta.forEach((catId) => {
                const Arrvlta = reportVlta.findIndex( (vta, index) => vta.fecha === fechaDia && vta.catvueltId === catId.id);
                const vuelta = Arrvlta !== -1 ? reportVlta[Arrvlta].pertSerVue.efectivo : 0;
                const colr = Arrvlta !== -1 ? reportVlta[Arrvlta].pertSerVue.pertCajSer.pertDesCaj.color : "";
                vlta.push(vuelta);
                color.push(colr);
                total += vuelta;
            });

            
            reporteServBus.push( {
                "fecha": fechaDia,
                "vlta": vlta,
                "total": total,
            });
        }

         worksheet.columns = [
        { header: "No.", key: "no", width: 10 },
        { header: "Fecha", key: "fecha", width: 20 },
        { header: "Vlta 0.5", key: "vlta1", width: 10 },
        { header: "Vlta 1", key: "vlta2", width: 10 },
        { header: "Vlta 1.5", key: "vlta3", width: 10 },
        { header: "Vlta 2", key: "vlta4", width: 10 },
        { header: "Vlta 2.5", key: "vlta5", width: 10 },
        { header: "Vlta 3", key: "vlta6", width: 10 },
        { header: "Total", key: "total", width: 20 },
        ];

    let counter = 1;

    reporteServBus.forEach((srv) => {
      
        const rows = {
            "no": counter,
            "fecha": srv.fecha,
            "vlta1": srv.vlta[0],
            "vlta2": srv.vlta[1],
            "vlta3": srv.vlta[2],
            "vlta4": srv.vlta[3],
            "vlta5": srv.vlta[4],
            "vlta6": srv.vlta[5],
            "total": srv.total,
        }
        worksheet.addRow(rows);
        counter++;

    });

    worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
    });
    }



    try {
        res.setHeader(
          "Content-Type",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          );
        res.setHeader("Content-Disposition", `attachment; filename=cotizaciones.xlsx`);

        return workbook.xlsx.write(res).then(() => {
          res.status(200);
      });

    // await workbook.xlsx.writeFile(`${path}/users.xlsx`).then(() => {
    //   res.send({
    //     status: "success",
    //     message: "file successfully downloaded",
    //     path: `${path}/users.xlsx`,
    //   });
    // });
    } catch (err) {
        res.send({
          status: "error",
          message: "Something went wrong",
      });
    }
}


