const path = require('path');

// Load ORM
const Sequelize = require('sequelize');


// Environment variable to define the URL of the data base to use.
// To use SQLite data base:
//    DATABASE_URL = sqlite:empresa.sqlite
const url = process.env.DATABASE_URL || "sqlite:etersac.sqlite";

const sequelize = new Sequelize(url);

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

// Import the definition of the Config Table from config.js
const Config = sequelize.import(path.join(__dirname, 'config'));

// Import the definition of the Grupo Table from grupo.js
const Grupo = sequelize.import(path.join(__dirname, 'grupo'));

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

module.exports = sequelize;