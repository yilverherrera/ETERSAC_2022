var express = require('express');
var router = express.Router();

const empresaController = require('../controllers/empresa');
const routController = require('../controllers/rout');
const unidadController = require('../controllers/unidad');
const propietarioController = require('../controllers/propietario');
const grupoController = require('../controllers/grupo');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

// Autoload for routes
router.param('empresaId', empresaController.load);
router.param('routId', routController.load);
router.param('unidadId', unidadController.load);
router.param('propietarioId', propietarioController.load);
router.param('grupoId', grupoController.load);

// Routes for the resource /empresas
router.get('/empresas', empresaController.index);
router.get('/empresas/:empresaId(\\d+)', empresaController.show);
router.get('/empresas/new', empresaController.new);
router.post('/empresas', empresaController.create);
router.get('/empresas/:empresaId(\\d+)/edit', empresaController.edit);
router.put('/empresas/:empresaId(\\d+)', empresaController.update);
router.delete('/empresas/:empresaId(\\d+)', empresaController.destroy);

// Routes for the resource /routs
router.get('/routs', routController.index);
router.get('/routs/:routId(\\d+)', routController.show);
router.get('/routs/new', routController.new);
router.post('/routs', routController.create);
router.get('/routs/:routId(\\d+)/edit', routController.edit);
router.put('/routs/:routId(\\d+)', routController.update);
router.delete('/routs/:routId(\\d+)', routController.destroy);

// Routes for the resource /Unidads
router.get('/unidads', unidadController.index);
router.get('/unidads/:unidadId(\\d+)', unidadController.show);
router.get('/unidads/new', unidadController.new);
router.post('/unidads', unidadController.create);
router.get('/unidads/:unidadId(\\d+)/edit', unidadController.edit);
router.put('/unidads/:unidadId(\\d+)', unidadController.update);
router.delete('/unidads/:unidadId(\\d+)', unidadController.destroy);

// Routes for the resource /Propietarios
router.get('/propietarios', propietarioController.index);
router.get('/propietarios/:propietarioId(\\d+)', propietarioController.show);
router.get('/propietarios/new', propietarioController.new);
router.post('/propietarios', propietarioController.create);
router.get('/propietarios/:propietarioId(\\d+)/edit', propietarioController.edit);
router.put('/propietarios/:propietarioId(\\d+)', propietarioController.update);
router.delete('/propietarios/:propietarioId(\\d+)', propietarioController.destroy);

//router.get('/propietarios/:propietarioId(\\d+)/check', propietarioController.check);

// Routes for the resource /Grupos
router.get('/grupos', grupoController.index);
router.get('/grupos/:grupoId(\\d+)', grupoController.show);
router.get('/grupos/new', grupoController.new);
router.post('/grupos', grupoController.create);
router.get('/grupos/:grupoId(\\d+)/edit', grupoController.edit);
router.put('/grupos/:grupoId(\\d+)', grupoController.update);
router.delete('/grupos/:grupoId(\\d+)', grupoController.destroy);


module.exports = router;
