const Sequelize = require("sequelize");
const {models} = require("../models");
const Op = Sequelize.Op;
const moment = require("moment");
const excelJS = require("exceljs");

// GET /reportes/new
exports.new = async (req, res, next) => {

  
    const reporte =
    {
        mes: "",
    };

    res.render('reportes/admgastos/new', { reporte});

};

exports.index = async (req, res, next) =>  {
    const {fecha} = req.query;
    const startOfMonth = moment(fecha).clone().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment(fecha).clone().endOf('month').format('YYYY-MM-DD');
    
    let findOptions = {
        where:{
            fecha:{
                [Op.gte]: startOfMonth,
                [Op.lte]: endOfMonth,
            }
        },
        include:[],
    }


    

    findOptions.include.push(
{
    model: models.Caja,
    as: "pertCajAdm",
    include:[{
        model: models.User,
        as: "author",
    }]
},
    {
        model: models.Categadm,
        as: "pertCatAdm",
    });



    

    try{


        const reporteAdmgastos = await models.Admgasto.findAll(findOptions);
        res.json(reporteAdmgastos);



    }catch(error){
    res.send({
          status: "error",
          message: "Something went wrong",
      });
    }
}


exports.downloadExcel = async (req, res ,next) => {
   const {fecha} = req.query;
    const startOfMonth = moment(fecha).clone().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment(fecha).clone().endOf('month').format('YYYY-MM-DD');
    
    let findOptions = {
        where:{
            fecha:{
                [Op.gte]: startOfMonth,
                [Op.lte]: endOfMonth,
            }
        },
        include:[],
    }


    

     findOptions.include.push(
{
    model: models.Caja,
    as: "pertCajAdm",
    include:[{
        model: models.User,
        as: "author",
    }]
},
    {
        model: models.Categadm,
        as: "pertCatAdm",
    });

   


   const workbook = new excelJS.Workbook();
   const worksheet = workbook.addWorksheet('Gastos_Adm');
   const path = "./files";


    const reporteAdmgastos = await models.Admgasto.findAll(findOptions).map( (report) =>  {
        
        return{
            autor: report.pertCajAdm.author.username,
            detalle: report.pertCatAdm.nombre,
            observaciones: report.observaciones,
            monto: report.monto,
        }
    });

    worksheet.columns = [
        { header: "S no.", key: "s_no", width: 5 },
        { header: "Autor", key: "autor", width: 10 },
        { header: "Detalle", key: "detalle", width: 30 },
        { header: "Observaciones", key: "observaciones", width: 40 },
        { header: "Monto", key: "monto", width: 10 },
        ];

    let counter = 1;

    reporteAdmgastos.forEach((adm) => {
        adm.s_no = counter;
        worksheet.addRow(adm);
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
        res.setHeader("Content-Disposition", `attachment; filename=gastos_adm.xlsx`);

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


