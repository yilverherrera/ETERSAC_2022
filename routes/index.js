var express = require('express');
var router = express.Router();

const empresaController = require('../controllers/empresa');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Autoload for routes using :empresaId
router.param('empresaId', empresaController.load);


// Routes for the resource /empresas
router.get('/empresas',                     empresaController.index);
router.get('/empresas/:empresaId(\\d+)',       empresaController.show);
router.get('/empresas/new',                 empresaController.new);
router.post('/empresas',                    empresaController.create);
router.get('/empresas/:empresaId(\\d+)/edit',  empresaController.edit);
router.put('/empresas/:empresaId(\\d+)',       empresaController.update);
router.delete('/empresas/:empresaId(\\d+)',    empresaController.destroy);

module.exports = router;
