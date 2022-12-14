const path = require('path');

// Load ORM
const Sequelize = require('sequelize');


// Environment variable to define the URL of the data base to use.
// To use SQLite data base:
//    DATABASE_URL = sqlite:empresa.sqlite
const url = process.env.DATABASE_URL || "sqlite:etersac.sqlite";

const sequelize = new Sequelize(url);

// Import the definition of the Users Table from user.js
const User = sequelize.import(path.join(__dirname,'user'));

// Session
sequelize.import(path.join(__dirname,'session'));

// Import the definition of the Empresa Table from empresa.js
const Empresa = sequelize.import(path.join(__dirname, 'empresa'));

// Import the definition of the Rout Table from rout.js
const Rout = sequelize.import(path.join(__dirname, 'rout'));

// Import the definition of the Unidad Table from unidad.js
const Unidad = sequelize.import(path.join(__dirname, 'unidad'));

// Import the definition of the Propietario Table from propietario.js
const Propietario = sequelize.import(path.join(__dirname, 'propietario'));

// Import the definition of the Grupo Table from grupo.js
const Grupo = sequelize.import(path.join(__dirname, 'grupo'));

// Import the definition of the Group Table from group.js
const Caja = sequelize.import(path.join(__dirname,'caja'));

// Import the definition of the Despacho Table from despacho.js
const Despacho = sequelize.import(path.join(__dirname,'despacho'));

// Import the definition of the Service Table from service.js
const Service = sequelize.import(path.join(__dirname,'service'));

// Import the definition of the Producto Table from producto.js
const Producto = sequelize.import(path.join(__dirname,'producto'));

// Import the definition of the Confservice Table from confservice.js
const Confservice = sequelize.import(path.join(__dirname,'confservice'));

// Import the definition of the Confproducto Table from confproducto.js
const Confproducto = sequelize.import(path.join(__dirname,'confproducto'));

// Import the definition of the Confproducto Table from confproducto.js
const Servbus = sequelize.import(path.join(__dirname,'servbus'));

// Import the definition of the Operador Table from operador.js
const Operador = sequelize.import(path.join(__dirname,'operador'));

// Import the definition of the Catvuelt Table from Catvuelt.js
const Catvuelt = sequelize.import(path.join(__dirname,'catvuelt'));

// Import the definition of the Vuelt Table from vuelt.js
const Vuelt = sequelize.import(path.join(__dirname,'vuelt'));

// Import the definition of the Cobroservbus Table from cobroservbus.js
const Cobroservbus = sequelize.import(path.join(__dirname,'cobroservbus'));

// Import the definition of the Tmpcobrobus Table from tmpcobrobus.js
const Tmpcobrobus = sequelize.import(path.join(__dirname,'tmpcobrobus'));

// Import the definition of the Vent Table from vent.js
const Vent = sequelize.import(path.join(__dirname,'vent'));

// Import the definition of the Vueltpro Table from vueltpro.js
const Vueltpro = sequelize.import(path.join(__dirname,'vueltpro'));

// Import the definition of the Cobrovent Table from cobrovent.js
const Cobrovent = sequelize.import(path.join(__dirname,'cobrovent'));

// Import the definition of the Tmpcobrovta Table from tmpcobrovta.js
const Tmpcobrovta = sequelize.import(path.join(__dirname,'tmpcobrovta'));

// Import the definition of the Anticipo Table from anticipo.js
const Anticipo = sequelize.import(path.join(__dirname,'anticipo'));

// Import the definition of the Aplianticipo Table from aplianticipo.js
const Aplianticipo = sequelize.import(path.join(__dirname,'aplianticipo'));

// Import the definition of the Busgasto Table from busgasto.js
const Busgasto = sequelize.import(path.join(__dirname,'busgasto'));

// Import the definition of the Detbusgasto Table from detbusgasto.js
const Detbusgasto = sequelize.import(path.join(__dirname,'detbusgasto'));

// Import the definition of the Proveedor Table from proveedor.js
const Proveedor = sequelize.import(path.join(__dirname,'proveedor'));

// Import the definition of the Reproducto Table from reproducto.js
const Reproducto = sequelize.import(path.join(__dirname,'reproducto'));

// Import the definition of the Admgasto Table from admgasto.js
const Admgasto = sequelize.import(path.join(__dirname,'admgasto'));

// Import the definition of the Categadm Table from categadm.js
const Categadm = sequelize.import(path.join(__dirname,'categadm'));

// Import the definition of the Pagoproveedor Table from pagoproveedor.js
const Pagoproveedor = sequelize.import(path.join(__dirname,'pagoproveedor'));

// Import the definition of the Nomina Table from nomina.js
const Nomina = sequelize.import(path.join(__dirname,'nomina'));

// Import the definition of the Quincena Table from quincena.js
const Quincena = sequelize.import(path.join(__dirname,'quincena'));

// Import the definition of the Empleado Table from empleado.js
const Empleado = sequelize.import(path.join(__dirname,'empleado'));

// Import the definition of the Prestamopersona Table from prestamopersona.js
const Prestamopersona = sequelize.import(path.join(__dirname,'prestamopersona'));

// Import the definition of the Pagoprespersona Table from pagoprespersona.js
const Pagoprespersona = sequelize.import(path.join(__dirname,'pagoprespersona'));

// Import the definition of the Pagonomina Table from pagonomina.js
const Pagonomina = sequelize.import(path.join(__dirname,'pagonomina'));

// Import the definition of the Financiera Table from financiera.js
const Financiera = sequelize.import(path.join(__dirname,'financiera'));

// Import the definition of the Prestfinanciero Table from prestfinanciero.js
const Prestfinanciero = sequelize.import(path.join(__dirname,'prestfinanciero'));

// Import the definition of the Pagoprestfinanciero Table from pagoprestfinanciero.js
const Pagoprestfinanciero = sequelize.import(path.join(__dirname,'pagoprestfinanciero'));

// Import the definition of the Retiro Table from retiro.js
const Retiro = sequelize.import(path.join(__dirname,'retiro'));

// Import the definition of the Destino Table from destino.js
const Destino = sequelize.import(path.join(__dirname,'destino'));

// Import the definition of the Destino Table from destino.js
const Cpc = sequelize.import(path.join(__dirname,'cpc'));

// Import the definition of the Destino Table from destino.js
const Cobrocpc = sequelize.import(path.join(__dirname,'cobrocpc'));

// Relation 1-to-N between Empresa and Rout:
Empresa.hasMany(Rout, {as: 'routs', foreignKey: 'empresaId'});
Rout.belongsTo(Empresa, {as: 'pertEmpRou', foreignKey: 'empresaId'});

// Relation 1-to-N between Rout and Unidad:
Rout.hasMany(Unidad, {as: 'unidads', foreignKey: 'routId'});
Unidad.belongsTo(Rout, {as: 'pertRouUni', foreignKey: 'routId'});

// Relation 1-to-N between Propietario and Unidad:
Propietario.hasMany(Unidad, {as: 'unidads', foreignKey: 'propietarioId'});
Unidad.belongsTo(Propietario, {as: 'pertProUni', foreignKey: 'propietarioId'});

// Relation 1-to-N between Empresa and Grupo:
Empresa.hasMany(Grupo, {as: 'grupos', foreignKey: 'empresaId'});
Grupo.belongsTo(Empresa, {as: 'pertEmpGru', foreignKey: 'empresaId'});

// Relation 1-to-N between Rout and Grupo:
Rout.hasMany(Grupo, {as: 'grupos', foreignKey: 'routId'});
Grupo.belongsTo(Rout, {as: 'pertRouGru', foreignKey: 'routId'});

// Relation 1-to-N between User and Caja:
User.hasMany(Caja, {as: 'cajas', foreignKey: 'authorId'});
Caja.belongsTo(User, {as: 'author', foreignKey: 'authorId'});

// Relation 1-to-N between Despacho and Caja:
Despacho.hasMany(Caja, {as: 'cajas', foreignKey: 'despachoId'});
Caja.belongsTo(Despacho, {as: 'pertDesCaj', foreignKey: 'despachoId'});

// Relation 1-to-N between Ruta and Caja:
Rout.hasMany(Caja, {as: 'cajas', foreignKey: 'routId'});
Caja.belongsTo(Rout, {as: 'pertRouCaj', foreignKey: 'routId'});

// Relation 1-to-N between Ruta and Despacho:
Rout.hasMany(Despacho, {as: 'despachos', foreignKey: 'routId'});
Despacho.belongsTo(Rout, {as: 'pertRouDes', foreignKey: 'routId'});

// Relation 1-to-N between Service and Confservice:
Service.hasMany(Confservice, {as: 'confservices', foreignKey: 'serviceId'});
Confservice.belongsTo(Service, {as: 'pertSerCser', foreignKey: 'serviceId'});

// Relation 1-to-N between Grupo and Confservice:
Grupo.hasMany(Confservice, {as: 'confservices', foreignKey: 'grupoId'});
Confservice.belongsTo(Grupo, {as: 'pertGruCser', foreignKey: 'grupoId'});

// Relation 1-to-N between Producto and Confproducto:
Producto.hasMany(Confproducto, {as: 'confproductos', foreignKey: 'productoId'});
Confproducto.belongsTo(Producto, {as: 'pertProCpro', foreignKey: 'productoId'});

// Relation 1-to-N between Grupo and Confproducto:
Grupo.hasMany(Confproducto, {as: 'confproductos', foreignKey: 'grupoId'});
Confproducto.belongsTo(Grupo, {as: 'pertGruCpro', foreignKey: 'grupoId'});

// Relation 1-to-N between Caja and Servbus:
Caja.hasMany(Servbus, {as: 'servbuses', foreignKey: 'cajaId'});
Servbus.belongsTo(Caja, {as: 'pertCajSer', foreignKey: 'cajaId'});

// Relation 1-to-N between Unidad and Servbus:
Unidad.hasMany(Servbus, {as: 'servbuses', foreignKey: 'unidadId'});
Servbus.belongsTo(Unidad, {as: 'pertUniSer', foreignKey: 'unidadId'});

// Relation 1-to-N between Service and Servbus:
Service.hasMany(Servbus, {as: 'servbuses', foreignKey: 'serviceId'});
Servbus.belongsTo(Service, {as: 'pertSerSer', foreignKey: 'serviceId'});

// Relation 1-to-N between Operador and Servbus:
Operador.hasMany(Servbus, {as: 'servbuses', foreignKey: 'operadorId'});
Servbus.belongsTo(Operador, {as: 'pertOpeSer', foreignKey: 'operadorId'});

// Relation 1-to-N between Servbus and Vuelt:
Servbus.hasMany(Vuelt, {as: 'vuelts', foreignKey: 'servbusId'});
Vuelt.belongsTo(Servbus, {as: 'pertSerVue', foreignKey: 'servbusId'});

// Relation 1-to-N between Unidad and Vuelt:
Unidad.hasMany(Vuelt, {as: 'vuelts', foreignKey: 'unidadId'});
Vuelt.belongsTo(Unidad, {as: 'pertUniVue', foreignKey: 'unidadId'});

// Relation 1-to-N between Catvuelt and Vuelt:
Catvuelt.hasMany(Vuelt, {as: 'vuelts', foreignKey: 'catvueltId'});
Vuelt.belongsTo(Catvuelt, {as: 'pertCatvVue', foreignKey: 'catvueltId'});

// Relation 1-to-N between Servbus and Cobroservbus:
Servbus.hasMany(Cobroservbus, {as: 'cobroservbus', foreignKey: 'servbusId'});
Cobroservbus.belongsTo(Servbus, {as: 'pertServCob', foreignKey: 'servbusId'});

// Relation 1-to-N between Caja and Cobroservbus:
Caja.hasMany(Cobroservbus, {as: 'cobroservbusc', foreignKey: 'cajaId'});
Cobroservbus.belongsTo(Caja, {as: 'pertCajCob', foreignKey: 'cajaId'});

// Relation 1-to-N between Servbus and Tmpcobrobus:
Servbus.hasMany(Tmpcobrobus, {as: 'tmpcobrobus', foreignKey: 'servbusId'});
Tmpcobrobus.belongsTo(Servbus, {as: 'pertServTmp', foreignKey: 'servbusId'});

// Relation 1-to-N between Servbus and Tmpcobrobus:
Servbus.hasMany(Tmpcobrobus, {as: 'tmpcobrobusc', foreignKey: 'servbuscId'});
Tmpcobrobus.belongsTo(Servbus, {as: 'pertServcTmp', foreignKey: 'servbuscId'});

// Relation 1-to-N between Unidad and Ventas:
Unidad.hasMany(Vent, {as: 'ventas', foreignKey: 'unidadId'});
Vent.belongsTo(Unidad, {as: 'pertUniVen', foreignKey: 'unidadId'});

// Relation 1-to-N between Producto and Ventas:
Producto.hasMany(Vent, {as: 'ventas', foreignKey: 'productoId'});
Vent.belongsTo(Producto, {as: 'pertProVen', foreignKey: 'productoId'});

// Relation 1-to-N between Unidad and Ventas:
Caja.hasMany(Vent, {as: 'ventas', foreignKey: 'cajaId'});
Vent.belongsTo(Caja, {as: 'pertCajVen', foreignKey: 'cajaId'});

// Relation 1-to-N between Servbus and Vuelt:
Vent.hasMany(Vueltpro, {as: 'vueltpros', foreignKey: 'ventId'});
Vueltpro.belongsTo(Vent, {as: 'pertVenVue', foreignKey: 'ventId'});

// Relation 1-to-N between Catvuelt and Vuelt:
Catvuelt.hasMany(Vueltpro, {as: 'vueltpros', foreignKey: 'catvueltId'});
Vueltpro.belongsTo(Catvuelt, {as: 'pertCatvVup', foreignKey: 'catvueltId'});

// Relation 1-to-N between Unidad and Vueltpro:
Unidad.hasMany(Vueltpro, {as: 'vueltpros', foreignKey: 'unidadId'});
Vueltpro.belongsTo(Unidad, {as: 'pertUniVup', foreignKey: 'unidadId'});

// Relation 1-to-N between Operador and Vents:
Operador.hasMany(Vent, {as: 'ventas', foreignKey: 'operadorId'});
Vent.belongsTo(Operador, {as: 'pertOpeVen', foreignKey: 'operadorId'});

// Relation 1-to-N between Vent and Cobrovent:
Vent.hasMany(Cobrovent, {as: 'cobrovent', foreignKey: 'ventId'});
Cobrovent.belongsTo(Vent, {as: 'pertVenCob', foreignKey: 'ventId'});

// Relation 1-to-N between Caja and Cobrovent
Caja.hasMany(Cobrovent, {as: 'cobroventc', foreignKey: 'cajaId'});
Cobrovent.belongsTo(Caja, {as: 'pertCajCobv', foreignKey: 'cajaId'});

// Relation 1-to-N between Vent and Tmpcobrovta:
Vent.hasMany(Tmpcobrovta, {as: 'tmpcobrovta', foreignKey: 'ventId'});
Tmpcobrovta.belongsTo(Vent, {as: 'pertVtaTmp', foreignKey: 'ventId'});

// Relation 1-to-N between Vent and Tmpcobrovta:
Vent.hasMany(Tmpcobrovta, {as: 'tmpcobrovtac', foreignKey: 'ventcId'});
Tmpcobrovta.belongsTo(Vent, {as: 'pertVtacTmp', foreignKey: 'ventcId'});

// Relation 1-to-N between Caja and Anticipo
Caja.hasMany(Anticipo, {as: 'anticipos', foreignKey: 'cajaId'});
Anticipo.belongsTo(Caja, {as: 'pertCajAnt', foreignKey: 'cajaId'});

// Relation 1-to-N between Unidad and Anticipo
Unidad.hasMany(Anticipo, {as: 'anticipos', foreignKey: 'unidadId'});
Anticipo.belongsTo(Unidad, {as: 'pertUniAnt', foreignKey: 'unidadId'});

// Relation 1-to-N between Anticipo and Aplianticipo
Anticipo.hasMany(Aplianticipo, {as: 'aplianticipos', foreignKey: 'anticipoId'});
Aplianticipo.belongsTo(Anticipo, {as: 'pertAntApl', foreignKey: 'anticipoId'});

// Relation 1-to-N between Vent and Aplianticipo
Vent.hasMany(Aplianticipo, {as: 'aplianticipos', foreignKey: 'ventId'});
Aplianticipo.belongsTo(Vent, {as: 'pertVenApl', foreignKey: 'ventId'});

// Relation 1-to-N between Proveedor and Busgasto
Proveedor.hasMany(Busgasto, {as: 'busgastos', foreignKey: 'proveedorId'});
Busgasto.belongsTo(Proveedor, {as: 'pertProBug', foreignKey: 'proveedorId'});

// Relation 1-to-N between Caja and Busgasto
Caja.hasMany(Busgasto, {as: 'busgastos', foreignKey: 'cajaId'});
Busgasto.belongsTo(Caja, {as: 'pertCajBug', foreignKey: 'cajaId'});

// Relation 1-to-N between Producto and Detbusgasto
Reproducto.hasMany(Detbusgasto, {as: 'detbusgastos', foreignKey: 'reproductoId'});
Detbusgasto.belongsTo(Reproducto, {as: 'pertProDbg', foreignKey: 'reproductoId'});

// Relation 1-to-N between Unidad and Detbusgasto
Unidad.hasMany(Detbusgasto, {as: 'detbusgastos', foreignKey: 'unidadId'});
Detbusgasto.belongsTo(Unidad, {as: 'pertUniDbg', foreignKey: 'unidadId'});

// Relation 1-to-N between Busgasto and Detbusgasto
Busgasto.hasMany(Detbusgasto, {as: 'detbusgastos', foreignKey: 'busgastoId'});
Detbusgasto.belongsTo(Busgasto, {as: 'pertBugDbg', foreignKey: 'busgastoId'});

// Relation 1-to-N between Categadm and Admgasto
Categadm.hasMany(Admgasto, {as: 'admgastos', foreignKey: 'categadmId'});
Admgasto.belongsTo(Categadm, {as: 'pertCatAdm', foreignKey: 'categadmId'});

// Relation 1-to-N between Caja and Admgasto
Caja.hasMany(Admgasto, {as: 'admgastos', foreignKey: 'cajaId'});
Admgasto.belongsTo(Caja, {as: 'pertCajAdm', foreignKey: 'cajaId'});

// Relation 1-to-N between Proveedor and Pagoproveedor
Proveedor.hasMany(Pagoproveedor, {as: 'proveedors', foreignKey: 'proveedorId'});
Pagoproveedor.belongsTo(Proveedor, {as: 'pertProPag', foreignKey: 'proveedorId'});

// Relation 1-to-N between Busgasto and Pagoproveedor
Busgasto.hasMany(Pagoproveedor, {as: 'busgastos', foreignKey: 'busgastoId'});
Pagoproveedor.belongsTo(Busgasto, {as: 'pertBusPag', foreignKey: 'busgastoId'});

// Relation 1-to-N between Caja and Pagoproveedor
Caja.hasMany(Pagoproveedor, {as: 'cajas', foreignKey: 'cajaId'});
Pagoproveedor.belongsTo(Caja, {as: 'pertCajPag', foreignKey: 'cajaId'});

// Relation 1-to-N between Quincena and Nomina
Quincena.hasMany(Nomina, {as: 'quincenas', foreignKey: 'quincenaId'});
Nomina.belongsTo(Quincena, {as: 'pertQuiNom', foreignKey: 'quincenaId'});

// Relation 1-to-N between Empleado and Nomina
Empleado.hasMany(Nomina, {as: 'empleados', foreignKey: 'empleadoId'});
Nomina.belongsTo(Empleado, {as: 'pertEmpNom', foreignKey: 'empleadoId'});

// Relation 1-to-N between Empleado and Nomina
Empleado.hasMany(Prestamopersona, {as: 'prestamopersonas', foreignKey: 'empleadoId'});
Prestamopersona.belongsTo(Empleado, {as: 'pertEmpPre', foreignKey: 'empleadoId'});

// Relation 1-to-N between Prestamoperson and Pagopresperson
Prestamopersona.hasMany(Pagoprespersona, {as: 'pagoprespersonas', foreignKey: 'prestamopersonaId'});
Pagoprespersona.belongsTo(Prestamopersona, {as: 'pertPrePag', foreignKey: 'prestamopersonaId'});

// Relation 1-to-N between Nomina and Pagopresperson
Nomina.hasMany(Pagoprespersona, {as: 'pagoprespersonas', foreignKey: 'nominaId'});
Pagoprespersona.belongsTo(Nomina, {as: 'pertNomPag', foreignKey: 'nominaId'});

// Relation 1-to-N between Nomina and Pagonomina
Nomina.hasMany(Pagonomina, {as: 'pagonominas', foreignKey: 'nominaId'});
Pagonomina.belongsTo(Nomina, {as: 'pertNomPan', foreignKey: 'nominaId'});

// Relation 1-to-N between Nomina and Pagonomina
Caja.hasMany(Pagonomina, {as: 'pagonominas', foreignKey: 'cajaId'});
Pagonomina.belongsTo(Caja, {as: 'pertCajPan', foreignKey: 'cajaId'});

// Relation 1-to-N between Financiera and Prestfinanciero
Financiera.hasMany(Prestfinanciero, {as: 'prestfinancieros', foreignKey: 'financieraId'});
Prestfinanciero.belongsTo(Financiera, {as: 'pertFinPre', foreignKey: 'financieraId'});

// Relation 1-to-N between Prestfinanciero and Pagoprestfinanciero
Prestfinanciero.hasMany(Pagoprestfinanciero, {as: 'pagoprestfinancieros', foreignKey: 'prestfinancieroId'});
Pagoprestfinanciero.belongsTo(Prestfinanciero, {as: 'pertPrePaf', foreignKey: 'prestfinancieroId'});

// Relation 1-to-N between Caja and Pagoprestfinanciero
Caja.hasMany(Pagoprestfinanciero, {as: 'pagoprestfinancieros', foreignKey: 'cajaId'});
Pagoprestfinanciero.belongsTo(Caja, {as: 'pertCajPaf', foreignKey: 'cajaId'});

// Relation 1-to-N between Destino and Retiro
Destino.hasMany(Retiro, {as: 'retiros', foreignKey: 'destinoId'});
Retiro.belongsTo(Destino, {as: 'pertDesRet', foreignKey: 'destinoId'});

// Relation 1-to-N between Caja and Retiro
Caja.hasMany(Retiro, {as: 'retiros', foreignKey: 'cajaId'});
Retiro.belongsTo(Caja, {as: 'pertCajRet', foreignKey: 'cajaId'});

// Relation 1-to-N between Empleado and Retiro
Empleado.hasMany(Retiro, {as: 'retiros', foreignKey: 'empleadoId'});
Retiro.belongsTo(Empleado, {as: 'pertEmpRet', foreignKey: 'empleadoId'});

// Relation 1-to-N between Empleado and Retiro
Operador.hasMany(Cpc, {as: 'operadors', foreignKey: 'operadorId'});
Cpc.belongsTo(Operador, {as: 'pertOpeCpc', foreignKey: 'operadorId'});

// Relation 1-to-N between Empleado and Retiro
Cpc.hasMany(Cobrocpc, {as: 'cobrocpc', foreignKey: 'cpcId'});
Cobrocpc.belongsTo(Cpc, {as: 'pertCpcCob', foreignKey: 'cpcId'});

// Relation 1-to-N between Empleado and Retiro
Caja.hasMany(Cobrocpc, {as: 'cajascpc', foreignKey: 'cajaId'});
Cobrocpc.belongsTo(Caja, {as: 'pertCajCobc', foreignKey: 'cajaId'});

// Relation N-to-N between Unidad and Grupo:
Unidad.belongsToMany(Grupo, {
    as: 'grupos',
    through: 'GrupoUnidads',
    foreignKey: 'unidadId',
    otherKey: 'grupoId'
});

Grupo.belongsToMany(Unidad, {
    as: 'unidads',
    through: 'GrupoUnidads',
    foreignKey: 'grupoId',
    otherKey: 'unidadId'
});

// Relation N-to-N between User and Despacho:
User.belongsToMany(Despacho, {
    as: 'despachos',
    through: 'DespachoUsers',
    foreignKey: 'userId',
    otherKey: 'despachoId'
});

Despacho.belongsToMany(User, {
    as: 'users',
    through: 'DespachoUsers',
    foreignKey: 'despachoId',
    otherKey: 'userId'
});

module.exports = sequelize;