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

    res.render('reportes/ventas/new', { reporte, unidads});

};

exports.index = async (req, res, next) =>  {
    const { productoId, fecha, unidadId} = req.query;
    const startOfMonth = moment(fecha).clone().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment(fecha).clone().endOf('month').format('YYYY-MM-DD');
    const producto = await models.Producto.findByPk(productoId);
    let switchVlta = false;
    if (producto.vuelta === true && unidadId !== ''){
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
            as: "pertUniVen",
        });
        findOptions.include.push({
            model: models.Caja,
            as: "pertCajVen",
            include:[{
                model: models.User,
                as: "author",
            }]
        });

        findOptions.where.productoId = productoId;

    } else {
     findOptions.include.push({
        model: models.Vent,
        as: "pertVenVue",
        include:[{
            model: models.Caja,
            as: "pertCajVen",
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
        const reporteVents = await models.Vent.findAll(findOptions);
        res.json(reporteVents);

    } else {
        const anticipos = await models.Anticipo.findAll({
            where:{
                fecha:{
                    [Op.gte]: startOfMonth,
                    [Op.lte]: endOfMonth,
                },
                unidadId:{
                    [Op.eq]: unidadId,
                }
            },
            include:[{
                model: models.Aplianticipo,
                as: "aplianticipos",
                include:[{
                    model: models.Vent,
                    as: "pertVenApl"
                }]
            },
           ]
        });
        const reportVlta = await models.Vueltpro.findAll(findOptions);
        const catVlta = await models.Catvuelt.findAll();
        const inicio = new Date(startOfMonth);
        const fin = new Date(endOfMonth);
         const INTERVALO = 1000 * 60 * 60 * 24;; // Cada dia
         let reporteVents = [];
         for (let i = inicio; i <= fin; i = new Date(i.getTime() + INTERVALO)) {
            let total = 0;
            let vlta = [];
            let color = [];
            let detalleMonto = [];
            const fechaDia = i.toISOString().split('T')[0];
            catVlta.forEach((catId) => {
                const Arrvlta = reportVlta.findIndex( (vta, index) => vta.fecha === fechaDia && vta.catvueltId === catId.id);
                const vuelta = Arrvlta !== -1 ? reportVlta[Arrvlta].pertVenVue.monto : 0;
                const detalle = Arrvlta !== -1 ? `Efectivo:${reportVlta[Arrvlta].pertVenVue.efectivo} Anticipos:${reportVlta[Arrvlta].pertVenVue.anticipo} Cpc:${reportVlta[Arrvlta].pertVenVue.cpc} Banco:${reportVlta[Arrvlta].pertVenVue.banco} Falla:${reportVlta[Arrvlta].pertVenVue.dctoFalla} Siniestro:${reportVlta[Arrvlta].pertVenVue.dctoSinietro} Autoridad:${reportVlta[Arrvlta].pertVenVue.dctoAutoridad}, ` : "";
                const colr = Arrvlta !== -1 ? reportVlta[Arrvlta].pertVenVue.pertCajVen.pertDesCaj.color : "";
                vlta.push(vuelta);
                detalleMonto.push(detalle);
                color.push(colr);
                total += vuelta;
            });
            const arrantic = anticipos.filter( (ant, index) => ant.fecha === fechaDia);
            let anticipo = 0;
            let aplicado = '';
            if (JSON.stringify(arrantic) !== '[]'){
                arrantic.forEach((artnc) => {
                    anticipo += artnc.monto;
                    artnc.aplianticipos.forEach( (apli) => {
                        aplicado += `Fecha que se Aplico:${apli.fecha} Monto Aplicado:${apli.monto} (Aplicado al Tanqueo:${apli.pertVenApl.monto} de Fecha:${apli.pertVenApl.fecha}), `;
                    });
                });
            }

            
            reporteVents.push( {
                "fecha": fechaDia,
                "vlta": vlta,
                "detalleMonto": detalleMonto,
                "color": color,
                "total": total,
                "anticipo": anticipo,
                "aplicado": aplicado,
            });
        }


        res.json(reporteVents);



    }

    
}catch(error){

}
}


exports.downloadExcel = async (req, res ,next) => {
    const { productoId, fecha, unidadId} = req.query;
    const startOfMonth = moment(fecha).clone().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment(fecha).clone().endOf('month').format('YYYY-MM-DD');
    const producto = await models.Producto.findByPk(productoId);
    let switchVlta = false;
    if (producto.vuelta === true && unidadId !== ''){
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
            as: "pertUniVen",
        });
        findOptions.include.push({
            model: models.Caja,
            as: "pertCajVen",
            include:[{
                model: models.User,
                as: "author",
            }]
        });

        findOptions.where.productoId = productoId;

    } else {
     findOptions.include.push({
        model: models.Vent,
        as: "pertVenVue",
        include:[{
            model: models.Caja,
            as: "pertCajVen",
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
 const worksheet = workbook.addWorksheet(producto.nombre);
 const path = "./files";


 if (switchVlta === false) { 

    const reporteVents = await models.Vent.findAll(findOptions).map( (report) =>  {
        return{
            autor: report.pertCajVen.author.username,
            pd: report.pertUniVen.placa,
            fechaCaja: report.fechaCaja,
            fecha: report.fecha,
            monto: report.monto,
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

    reporteVents.forEach((vnt) => {
        vnt.s_no = counter;
        worksheet.addRow(vnt);
        counter++;
    });

    worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
    });

} else {
    const reportVlta = await models.Vueltpro.findAll(findOptions);
    const catVlta = await models.Catvuelt.findAll();
    const unidad = await models.Unidad.findByPk(unidadId);
    const placa = unidad.placa;
    const inicio = new Date(startOfMonth);
    const fin = new Date(endOfMonth);
         const INTERVALO = 1000 * 60 * 60 * 24;; // Cada dia
         let reporteVents = [];
         for (let i = inicio; i <= fin; i = new Date(i.getTime() + INTERVALO)) {
            let total = 0;
            let vlta = [];
            let color = [];
            const fechaDia = i.toISOString().split('T')[0]
            catVlta.forEach((catId) => {
                const Arrvlta = reportVlta.findIndex( (vta, index) => vta.fecha === fechaDia && vta.catvueltId === catId.id);
                const vuelta = Arrvlta !== -1 ? reportVlta[Arrvlta].pertVenVue.monto : 0;
                const colr = Arrvlta !== -1 ? reportVlta[Arrvlta].pertVenVue.pertCajVen.pertDesCaj.color : "";
                vlta.push(vuelta);
                color.push(colr);
                total += vuelta;
            });

            
            reporteVents.push( {
                "placa": placa,
                "fecha": fechaDia,
                "vlta": vlta,
                "total": total,
            });
        }

        worksheet.columns = [
            { header: "No.", key: "no", width: 10 },
            { header: "Placa", key: "placa", width: 10 },
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

        reporteVents.forEach((vnt) => {

            const rows = {
                "no": counter,
                "placa": vnt.placa,
                "fecha": vnt.fecha,
                "vlta1": vnt.vlta[0],
                "vlta2": vnt.vlta[1],
                "vlta3": vnt.vlta[2],
                "vlta4": vnt.vlta[3],
                "vlta5": vnt.vlta[4],
                "vlta6": vnt.vlta[5],
                "total": vnt.total,
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
        res.setHeader("Content-Disposition", `attachment; filename=ventas.xlsx`);

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


