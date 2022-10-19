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
  cajaController.limitPerDay,
  cajaController.new);
router.post('/cajas',
  sessionController.loginRequired,
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

// Routes for the resource servbuses Cobros
router.get('/cajas/:cajaId(\\d+)/cobros',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  cajaController.indexCobro);

// Routes for the resource Despacho
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
  router.get('/cajas/:cajaId(\\d+)/vents/:ventId(\\d+)/edit',
  sessionController.loginRequired,
  cajaController.AuthorRequired,
  ventController.edit);  
router.put('/cajas/:cajaId(\\d+)/vents/:ventId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,           
  ventController.update); 
router.delete('/cajas/:cajaId(\\d+)/vents/:ventId(\\d+)',
  sessionController.loginRequired,
  cajaController.AuthorRequired,          
  ventController.destroy);


module.exports = router;
