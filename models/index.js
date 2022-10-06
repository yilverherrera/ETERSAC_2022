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

// Import the definition of the Vuelt Table from Vuelt.js
const Vuelt = sequelize.import(path.join(__dirname,'vuelt'));

// Import the definition of the Cobroservbus Table from cobroservbus.js
const Cobroservbus = sequelize.import(path.join(__dirname,'cobroservbus'));

// Import the definition of the Tmpcobrobus Table from tmpcobrobus.js
const Tmpcobrobus = sequelize.import(path.join(__dirname,'tmpcobrobus'));

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
Producto.hasMany(Confservice, {as: 'confproductos', foreignKey: 'productoId'});
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