var express = require('express');
var router = express.Router();

const empresaController = require('../controllers/empresa');
const routController = require('../controllers/rout');
const unidadController = require('../controllers/unidad');
const propietarioController = require('../controllers/propietario');
const grupoController = require('../controllers/grupo');
const userController = require('../controllers/user');
const sessionController = require('../controllers/session');
const cajaController = require('../controllers/caja');
const despachoController = require('../controllers/despacho');
const serviceController = require('../controllers/service');
const servbusController = require('../controllers/servbus');
const confserviceController = require('../controllers/confservice');
const ventController = require('../controllers/vent');
const productoController = require('../controllers/producto');
const anticipoController = require('../controllers/anticipo');
const cobroController = require('../controllers/cobro');
const busgastoController = require('../controllers/busgasto');
const admgastoController = require('../controllers/admgasto');
const pagoproveedorController = require('../controllers/pagoproveedor');
const pagosController = require('../controllers/pagos');
const proveedorController = require('../controllers/proveedor');
const nominaController = require('../controllers/nomina');
const faltaController = require('../controllers/falta');
const quincenaController = require('../controllers/quincena');
const pagonominaController = require('../controllers/pagonomina');
const pagoprestfinancieroController = require('../controllers/pagoprestfinanciero');
const financieraController = require('../controllers/financiera');
const prestfinancieroController = require('../controllers/prestfinanciero');
const retiroController = require('../controllers/retiro');
//-----------------------------------------------------------

// Routes for the resource /login

// autologout
router.all('*', sessionController.checkLoginExpires);

// login form
router.get('/login', sessionController.new);

// create login session
router.post('/login',
  sessionController.create,
  sessionController.createLoginExpires);

// Authenticate with OAuth 2.0 at Github
if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  router.get('/auth/github',
    sessionController.authGitHub);
  router.get('/auth/github/callback',
    sessionController.authGitHubCB,
    sessionController.createLoginExpires);
}

// Authenticate with OAuth 1.0 at Twitter
if (process.env.TWITTER_CONSUMER_KEY && process.env.TWITTER_CONSUMER_SECRET) {
  router.get('/auth/twitter',
    sessionController.authTwitter);
  router.get('/auth/twitter/callback',
    sessionController.authTwitterCB,
    sessionController.createLoginExpires);
}

// Authenticate with OAuth 2.0 at Twitter
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  router.get('/auth/google',
    sessionController.authGoogle);
  router.get('/auth/google/callback',
    sessionController.authGoogleCB,
    sessionController.createLoginExpires);
}

// Authenticate with OAuth 2.0 at Linkedin
if (process.env.LINKEDIN_API_KEY && process.env.LINKEDIN_SECRET_KEY) {
  router.get('/auth/linkedin',
    sessionController.authLinkedin);
  router.get('/auth/linkedin/callback',
    sessionController.authLinkedinCB,
    sessionController.createLoginExpires);
}

// logout - close login session
router.delete('/login', sessionController.destroy);



//-----------------------------------------------------------

// History: Restoration routes.

// Redirection to the saved restoration route.
function redirectBack(req, res, next) {
  const url = req.session.backURL || "/";
  delete req.session.backURL;
  res.redirect(url);
}

router.get('/goback', redirectBack);

// Save the route that will be the current restoration route.
function saveBack(req, res, next) {
  req.session.backURL = req.url;
  next();
}

// Restoration routes are GET routes that do not end in:
//   /new, /edit, /login or /:id.
router.get(
  [
  '/',
  '/empresas',
  '/routs',
  '/propietarios',
  '/despachos',
  '/unidads',
  '/users',
  '/grupos',
  '/cajas',
  '/cajas/:id(\\d+)/servbuses',
  '/users/:id(\\d+)/cajas',
  '/cajas/:id(\\d+)/vents',
  '/cajas/:id(\\d+)/anticipos',
  '/cajas/:id(\\d+)/cobros',
  '/cajas/:id(\\d+)/busgastos',
  '/cajas/:id(\\d+)/admgastos',
  '/cajas/:id(\\d+)/pagoproveedors',
  '/cajas/:id(\\d+)/pagoprestfinancieros',
  '/cajas/:id(\\d+)/pagos',
  '/cajas/:id(\\d+)/retiros',
  '/nominas',
  '/cajas/:id(\\d+)/quincenas',
  '/login'
  ],
  saveBack);

//---------------------------------

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
router.param('userId', userController.load);
router.param('cajaId', cajaController.load);
router.param('servbusId', servbusController.load);
router.param('despachoId', despachoController.load);
router.param('serviceId', serviceController.load);
router.param('confserviceId', confserviceController.load);
router.param('ventId', ventController.load);
router.param('productoId', productoController.load);
router.param('anticipoId', anticipoController.load);
router.param('cobroId', cobroController.load);
router.param('cobrovId', cobroController.loadv);
router.param('busgastoId', busgastoController.load);
router.param('admgastoId', admgastoController.load);
router.param('pagoproveedorId', pagoproveedorController.load);
router.param('proveedorId', proveedorController.load);
router.param('nominaId', nominaController.load);
router.param('quincenaId', quincenaController.load);
router.param('pagonominaId', pagonominaController.load);
router.param('pagoprestfinancieroId', pagoprestfinancieroController.load);
router.param('financieraId', financieraController.load);
router.param('prestfinancieroId', prestfinancieroController.load);
router.param('retiroId', retiroController.load);

// Routes for the resource /users
router.get('/users',
  sessionController.loginRequired,
  userController.index);
router.get('/users/:userId(\\d+)',
  sessionController.loginRequired,
  userController.show);
if (!!process.env.QUIZ_OPEN_REGISTER) {
  router.get('/users/new',
    userController.new);
  router.post('/users',
    userController.create);
} else {
  router.get('/users/new',
    sessionController.loginRequired,
    sessionController.adminRequired,
    userController.new);
  router.post('/users',
    sessionController.loginRequired,
    sessionController.adminRequired,
    userController.create);
}
router.get('/users/:userId(\\d+)/edit',
  sessionController.loginRequired,
  userController.isLocalRequired,
  sessionController.adminOrMyselfRequired,
  userController.edit);
router.put('/users/:userId(\\d+)',
  sessionController.loginRequired,
  userController.isLocalRequired,
  sessionController.adminOrMyselfRequired,
  userController.update);
router.delete('/users/:userId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminOrMyselfRequired,
  userController.destroy);

// Routes for the resource /empresas
router.get('/empresas', empresaController.index);
router.get('/empresas/:empresaId(\\d+)',
  sessionController.loginRequired,
  empresaController.show);
router.get('/empresas/new',
  sessionController.loginRequired,
  sessionController.adminRequired,
  empresaController.new);
router.post('/empresas',
  sessionController.loginRequired,
  sessionController.adminRequired,
  empresaController.create);
router.get('/empresas/:empresaId(\\d+)/edit',
  sessionController.loginRequired,
  sessionController.adminRequired,
  empresaController.edit);
router.put('/empresas/:empresaId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  empresaController.update);
router.delete('/empresas/:empresaId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  empresaController.destroy);

// Routes for the resource /routs
router.get('/routs', routController.index);
router.get('/routs/:routId(\\d+)',
  sessionController.loginRequired,
  routController.show);
router.get('/routs/new',
  sessionController.loginRequired,
  sessionController.adminRequired,
  routController.new);
router.post('/routs',
  sessionController.loginRequired,
  sessionController.adminRequired,
  routController.create);
router.get('/routs/:routId(\\d+)/edit',
  sessionController.loginRequired,
  sessionController.adminRequired,
  routController.edit);
router.put('/routs/:routId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  routController.update);
router.delete('/routs/:routId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  routController.destroy);

// Routes for the resource /Unidads
router.get('/unidads', unidadController.index);
router.get('/unidads/:unidadId(\\d+)',
  sessionController.loginRequired,
  unidadController.show);
router.get('/unidads/new',
  sessionController.loginRequired,
  sessionController.adminRequired,
  unidadController.new);
router.post('/unidads',
  sessionController.loginRequired,
  sessionController.adminRequired,
  unidadController.create);
router.get('/unidads/:unidadId(\\d+)/edit',
  sessionController.adminRequired,
  sessionController.loginRequired,
  unidadController.edit);
router.put('/unidads/:unidadId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  unidadController.update);
router.delete('/unidads/:unidadId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  unidadController.destroy);

// Routes for the resource /Propietarios
router.get('/propietarios', propietarioController.index);
router.get('/propietarios/:propietarioId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  propietarioController.show);
router.get('/propietarios/new',
  sessionController.loginRequired,
  sessionController.adminRequired,
  propietarioController.new);
router.post('/propietarios',
  sessionController.loginRequired,
  sessionController.adminRequired,
  propietarioController.create);
router.get('/propietarios/:propietarioId(\\d+)/edit',
  sessionController.loginRequired,
  sessionController.adminRequired,
  propietarioController.edit);
router.put('/propietarios/:propietarioId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  propietarioController.update);
router.delete('/propietarios/:propietarioId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  propietarioController.destroy);

//router.get('/propietarios/:propietarioId(\\d+)/check', propietarioController.check);

// Routes for the resource /Grupos
router.get('/grupos', grupoController.index);
router.get('/grupos/:grupoId(\\d+)',
  sessionController.loginRequired,
  grupoController.show);
router.get('/grupos/new',
  sessionController.loginRequired,
  sessionController.adminRequired,
  grupoController.new);
router.post('/grupos',
  sessionController.loginRequired,
  sessionController.adminRequired,
  grupoController.create);
router.get('/grupos/:grupoId(\\d+)/edit',
  sessionController.loginRequired,
  sessionController.adminRequired,
  grupoController.edit);
router.put('/grupos/:grupoId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  grupoController.update);
router.delete('/grupos/:grupoId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  grupoController.destroy);

// Routes for the resource Cajas

//Mis Cajas
router.get('/users/:userId(\\d+)/cajas',
  sessionController.loginRequired,
  userController.isLocalRequired,
  cajaController.index);


router.get('/cajas',
  cajaController.index);
router.get('/cajas/new',
  sessionController.loginRequired,
  cajaController.new);
router.post('/cajas',
  sessionController.loginRequired,
  cajaController.limitPerDay,
  cajaController.create);
router.get('/cajas/:cajaId(\\d+)/edit',
  sessionController.loginRequired,
  sessionController.adminRequired,
  cajaController.edit);
router.put('/cajas/:cajaId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  cajaController.update);
router.delete('/cajas/:cajaId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  cajaController.destroy);

// Routes for the resource Servbuses
router.get('/cajas/:cajaId(\\d+)/servbuses',
  sessionController.loginRequired,
  servbusController.index);   
router.get('/cajas/:cajaId(\\d+)/servbuses/:servbusId(\\d+)',
  sessionController.loginRequired,
  servbusController.show);     
router.get('/cajas/:cajaId(\\d+)/servbuses/new',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  servbusController.new);
router.get('/cajas/:cajaId(\\d+)/buses/:unidadId(\\d+)/:serviceId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  servbusController.asocGroupRequired,                      
  servbusController.newServ);
router.post('/cajas/:cajaId(\\d+)/servbuses',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  servbusController.create);
router.get('/cajas/:cajaId(\\d+)/servbuses/:servbusId(\\d+)/edit',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  servbusController.edit);  
router.put('/cajas/:cajaId(\\d+)/servbuses/:servbusId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,           
  servbusController.update); 
router.delete('/cajas/:cajaId(\\d+)/servbuses/:servbusId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired, 
  servbusController.childlessRequired,             
  servbusController.destroy);

// Routes for the resource DespachoS
router.get('/despachos',
  despachoController.index);
router.get('/despachos/new',
  sessionController.loginRequired,
  sessionController.adminRequired,
  despachoController.new);
router.post('/despachos',
  sessionController.loginRequired,
  sessionController.adminRequired,
  despachoController.create);
router.get('/despachos/:despachoId(\\d+)/edit',
  sessionController.loginRequired,
  sessionController.adminRequired,
  despachoController.edit);
router.put('/despachos/:despachoId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  despachoController.update);
router.delete('/despachos/:despachoId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  despachoController.destroy);

// Routes Confservice
router.get('/confservices',
  confserviceController.index);
router.get('/confservices/new',
  sessionController.loginRequired,
  confserviceController.new);
router.post('/confservices',
  sessionController.loginRequired,
  confserviceController.create);
router.get('/confservices/:confserviceId(\\d+)/edit',
  sessionController.loginRequired,
  sessionController.adminRequired,
  confserviceController.edit);
router.put('/confservices/:confserviceId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,
  confserviceController.update);

// Routes for the resource Ventas
router.get('/cajas/:cajaId(\\d+)/vents',
  sessionController.loginRequired,
  ventController.index);   
router.get('/cajas/:cajaId(\\d+)/vents/:ventId(\\d+)',
  sessionController.loginRequired,
  ventController.show);     
router.get('/cajas/:cajaId(\\d+)/vents/new',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  ventController.new);
router.get('/cajas/:cajaId(\\d+)/sale/:unidadId(\\d+)/:productoId(\\d+)/newven',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  ventController.newVen);
router.post('/cajas/:cajaId(\\d+)/vents',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  ventController.create);
router.delete('/cajas/:cajaId(\\d+)/vents/:ventId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,          
  ventController.destroy);

// Routes for the resource Anticipos
router.get('/cajas/:cajaId(\\d+)/anticipos',
  sessionController.loginRequired,
  anticipoController.index);   
router.get('/cajas/:cajaId(\\d+)/anticipos/:anticipoId(\\d+)',
  sessionController.loginRequired,
  anticipoController.show);     
router.get('/cajas/:cajaId(\\d+)/anticipos/new',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  anticipoController.new);
router.post('/cajas/:cajaId(\\d+)/anticipos',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  anticipoController.create);
router.delete('/cajas/:cajaId(\\d+)/anticipos/:anticipoId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired, 
  anticipoController.childlessRequired,                      
  anticipoController.destroy);

// Routes for the resource Cobros
router.get('/cajas/:cajaId(\\d+)/cobros',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  cobroController.index);
router.get('/cajas/:cajaId(\\d+)/cobros/:cobroId(\\d+)',
  sessionController.loginRequired,
  cobroController.show);     
router.get('/cajas/:cajaId(\\d+)/cobros/v/:cobrovId(\\d+)',
  sessionController.loginRequired,
  cobroController.showv);     
router.get('/cajas/:cajaId(\\d+)/cobros/new',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  cobroController.new);
router.post('/cajas/:cajaId(\\d+)/cobros',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  cobroController.create);
router.delete('/cajas/:cajaId(\\d+)/cobros/:cobroId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,          
  cobroController.destroy);
router.delete('/cajas/:cajaId(\\d+)/cobros/v/:cobrovId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,          
  cobroController.destroyv);

//Routes for the resource Busgastos
router.get('/cajas/:cajaId(\\d+)/busgastos',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  busgastoController.index);
router.get('/cajas/:cajaId(\\d+)/busgastos/:busgastoId(\\d+)',
  sessionController.loginRequired,
  busgastoController.show);   
router.get('/cajas/:cajaId(\\d+)/busgastos/new',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  busgastoController.new);
router.post('/cajas/:cajaId(\\d+)/busgastos',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  busgastoController.create);
router.delete('/cajas/:cajaId(\\d+)/busgastos/:busgastoId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,          
  busgastoController.destroy);

//Routes for the resource Admgastos
router.get('/cajas/:cajaId(\\d+)/admgastos',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  admgastoController.index);
router.get('/cajas/:cajaId(\\d+)/admgastos/:admgastoId(\\d+)',
  sessionController.loginRequired,
  admgastoController.show);   
router.get('/cajas/:cajaId(\\d+)/admgastos/new',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  admgastoController.new);
router.post('/cajas/:cajaId(\\d+)/admgastos',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  admgastoController.create);
router.delete('/cajas/:cajaId(\\d+)/admgastos/:admgastoId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,          
  admgastoController.destroy);

//Routes for the resource Pagoproveedors
router.get('/cajas/:cajaId(\\d+)/pagoproveedors/:proveedorId(\\d+)',
  sessionController.loginRequired,
  pagoproveedorController.index);   
router.get('/cajas/:cajaId(\\d+)/pagoproveedors/:busgastoId(\\d+)/show',
  sessionController.loginRequired,
  pagoproveedorController.show);   
router.post('/cajas/:cajaId(\\d+)/pagoproveedors',
  sessionController.loginRequiredJson,
  cajaController.AuthorRequired,
  pagoproveedorController.create);
router.delete('/cajas/:cajaId(\\d+)/pagoproveedors/:pagoproveedorId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,          
  pagoproveedorController.destroy);

//Routes for the resource Pagos
router.get('/cajas/:cajaId(\\d+)/pagos',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  pagosController.index);


//Routes for the resource Nomina
router.get('/nominas',
  sessionController.loginRequired,
  sessionController.adminRequired,
  nominaController.index);
router.get('/nominas/new',
  sessionController.loginRequired,
  sessionController.adminRequired,
  nominaController.new);
router.post('/nominas',
  sessionController.loginRequiredJson,
  sessionController.adminRequired,
  nominaController.create);
router.delete('/nominas/:nominaId(\\d+)',
  sessionController.loginRequired,
  sessionController.adminRequired,     
  nominaController.destroy);

//Faltas
router.post('/nominas/:nominaId(\\d+)/faltas',
  sessionController.loginRequiredJson,
  sessionController.adminRequired,
  faltaController.create);
router.delete('/nominas/:nominaId(\\d+)/faltas',
  sessionController.loginRequiredJson,
  sessionController.adminRequiredJson,
  faltaController.destroy);


//Quincena
router.get('/cajas/:cajaId(\\d+)/quincenas/:quincenaId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  quincenaController.index);

//Pagos Nomina
router.get('/cajas/:cajaId(\\d+)/nominas/:nominaId(\\d+)/pagos/show',
  sessionController.loginRequiredJson,
  cajaController.AuthorRequired,
  pagonominaController.show);
router.post('/cajas/:cajaId(\\d+)/nominas/:nominaId(\\d+)/pagos',
  sessionController.loginRequiredJson,
  cajaController.AuthorRequired,
  pagonominaController.create);

//Routes for the resource Pagoprestfinancieros
router.get('/cajas/:cajaId(\\d+)/pagoprestfinancieros/:financieraId(\\d+)',
  sessionController.loginRequired,
  pagoprestfinancieroController.index);   
router.get('/cajas/:cajaId(\\d+)/pagoprestfinancieros/:prestfinancieroId(\\d+)/show',
  sessionController.loginRequired,
  pagoprestfinancieroController.show);   
router.post('/cajas/:cajaId(\\d+)/pagoprestfinancieros',
  sessionController.loginRequiredJson,
  cajaController.AuthorRequired,
  pagoprestfinancieroController.create);
router.delete('/cajas/:cajaId(\\d+)/pagoprestfinancieros/:pagoproveedorId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,          
  pagoprestfinancieroController.destroy);

//Routes for the resource Retiros
router.get('/cajas/:cajaId(\\d+)/retiros',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  retiroController.index);
router.get('/cajas/:cajaId(\\d+)/retiros/:retiroId(\\d+)',
  sessionController.loginRequired,
  retiroController.show);   
router.get('/cajas/:cajaId(\\d+)/retiros/new',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  retiroController.new);
router.post('/cajas/:cajaId(\\d+)/retiros',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  retiroController.create);
router.delete('/cajas/:cajaId(\\d+)/retiros/:retiroId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,          
  retiroController.destroy);

module.exports = router;
