const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const moment = require("moment");
const excelJS = require("exceljs");

exports.index = async (req, res, next) =>  {
    const { serviceId, fecha, unidadId} = req.query;
const startOfMonth = moment(fecha).clone().startOf('month').format('YYYY-MM-DD');
const endOfMonth = moment(fecha).clone().endOf('month').format('YYYY-MM-DD');

try{
    const reporteServBus = await models.Servbus.findAll({
        where:{
            serviceId:{
                [Op.eq]: serviceId,
            },
            unidadId:{
                [Op.eq]: unidadId,
            },
            fecha:{
                [Op.gte]: startOfMonth,
                [Op.lte]: endOfMonth,
            }
        },
        include:[{
            model: models.Unidad,
            as: "pertUniSer",
        }]
    });
    res.json(reporteServBus);
}catch(error){

}
}


exports.downloadExcel = async (req, res ,next) => {
    const { serviceId, fecha, unidadId} = req.query;
const startOfMonth = moment(fecha).clone().startOf('month').format('YYYY-MM-DD');
const endOfMonth = moment(fecha).clone().endOf('month').format('YYYY-MM-DD');


    const cotizacions = await models.Servbus.findAll({
        where:{
            serviceId:{
                [Op.eq]: serviceId,
            },
            unidadId:{
                [Op.eq]: unidadId,
            },
            fecha:{
                [Op.gte]: startOfMonth,
                [Op.lte]: endOfMonth,
            }
        },
        include:[{
            model: models.Unidad,
            as: "pertUniSer",
        }]
    }).map((serbus) => {
        return{
            pd: serbus.pertUniSer.placa,
            fechaCaja: serbus.fechaCaja,
            fecha: serbus.fecha,
            monto: serbus.monto,
        }
    });

 const workbook = new excelJS.Workbook();
  const worksheet = workbook.addWorksheet("Cotizaciones");
  const path = "./files";

  worksheet.columns = [
    { header: "S no.", key: "s_no", width: 10 },
    { header: "Placa", key: "pd", width: 10 },
    { header: "Fecha de Caja", key: "fechaCaja", width: 10 },
    { header: "Fecha a Aplicar", key: "fecha", width: 10 },
    { header: "Monto", key: "monto", width: 10 },
  ];

  let counter = 1;

  cotizacions.forEach((cot) => {
    cot.s_no = counter;
    worksheet.addRow(cot);
    counter++;
  });

  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });

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


