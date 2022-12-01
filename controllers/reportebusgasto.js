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

    res.render('reportes/busgastos/new', { reporte, unidads});

};

exports.index = async (req, res, next) =>  {
    const { tipoPago, fecha, unidadId} = req.query;
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


    

 if (unidadId === ''){
    findOptions.include.push(
    {
        model: models.Caja,
        as: "pertCajBug",
        include:[{
            model: models.User,
            as: "author",
        }]
    },
    {
        model: models.Detbusgasto,
        as: "detbusgastos",
        include:[{
            model: models.Unidad,
            as: "pertUniDbg",
        },
        {
            model: models.Reproducto,
            as: "pertProDbg",
        }
        ]
    });
} else {
    findOptions.include.push(
    {
        model: models.Caja,
        as: "pertCajBug",
        include:[{
            model: models.User,
            as: "author",
        }]
    },
    {
        model: models.Detbusgasto,
        as: "detbusgastos",
        where:{
            unidadId:{
                [Op.eq]:unidadId
            },
        },
        required: true,
        include:[{
            model: models.Unidad,
            as: "pertUniDbg",
        },
        {
            model: models.Reproducto,
            as: "pertProDbg",
        }
        ]
    });
}

    findOptions.where.tipoPago = tipoPago;

    

    try{


        const reporteBusgastos = await models.Busgasto.findAll(findOptions);
        res.json(reporteBusgastos);



    }catch(error){
    res.send({
          status: "error",
          message: "Something went wrong",
      });
    }
}


exports.downloadExcel = async (req, res ,next) => {
   const { tipoPago, fecha, unidadId} = req.query;
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


    

 if (unidadId === ''){
    findOptions.include.push(
    {
        model: models.Caja,
        as: "pertCajBug",
        include:[{
            model: models.User,
            as: "author",
        }]
    },
    {
        model: models.Detbusgasto,
        as: "detbusgastos",
        include:[{
            model: models.Unidad,
            as: "pertUniDbg",
        },
        {
            model: models.Reproducto,
            as: "pertProDbg",
        }
        ]
    });
} else {
    findOptions.include.push(
    {
        model: models.Caja,
        as: "pertCajBug",
        include:[{
            model: models.User,
            as: "author",
        }]
    },
    {
        model: models.Detbusgasto,
        as: "detbusgastos",
        where:{
            unidadId:{
                [Op.eq]:unidadId
            },
        },
        required: true,
        include:[{
            model: models.Unidad,
            as: "pertUniDbg",
        },
        {
            model: models.Reproducto,
            as: "pertProDbg",
        }
        ]
    });
}

    findOptions.where.tipoPago = tipoPago;

    


   const workbook = new excelJS.Workbook();
   const worksheet = workbook.addWorksheet('Gastos_Ope');
   const path = "./files";


    const reporteBusgastos = await models.Busgasto.findAll(findOptions).map( (report) =>  {
        let detalle = '';
        report.detbusgastos.forEach( (det) => detalle += `Placa: ${det.pertUniDbg.codigo}-${det.pertUniDbg.placa} Producto:${det.pertProDbg.nombre} Cant:${det.cant} CostoUni:${det.costoUni} Total:${det.total}, `);
        return{
            autor: report.pertCajBug.author.username,
            doc: report.doc,
            detalle: detalle,
            monto: report.monto,
        }
    });

    worksheet.columns = [
        { header: "S no.", key: "s_no", width: 5 },
        { header: "Autor", key: "autor", width: 10 },
        { header: "Doc", key: "doc", width: 10 },
        { header: "Detalle", key: "detalle", width: 50 },
        { header: "Monto", key: "monto", width: 10 },
        ];

    let counter = 1;

    reporteBusgastos.forEach((bus) => {
        bus.s_no = counter;
        worksheet.addRow(bus);
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
        res.setHeader("Content-Disposition", `attachment; filename=gastos_ope.xlsx`);

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


