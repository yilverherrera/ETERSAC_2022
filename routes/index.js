var express = require('express');
var router = express.Router();

const empresaController = require('../controllers/empresa');
const routController = require('../controllers/rout');
const unidadController = require('../controllers/unidad');
const propietarioController = require('../controllers/propietario');
const grupoController = require('../controllers/grupo');
const userController = require('../controllers/user');
const sessionController = require('../controllers/session');

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
    '/unidads',
    '/users',
    '/grupos',
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


// Routes for the resource /users
router.get('/users',
  sessionController.loginRequired,
  userController.index);
router.get('/users/:userId(\\d+)',
  sessionController.loginRequired,
  userController.show);
router.get('/users/new',
  userController.new);
router.post('/users',
  userController.create);
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
  empresaController.new);
router.post('/empresas',
  sessionController.loginRequired,
  empresaController.create);
router.get('/empresas/:empresaId(\\d+)/edit',
  sessionController.loginRequired,
  empresaController.edit);
router.put('/empresas/:empresaId(\\d+)',
  sessionController.loginRequired,
  empresaController.update);
router.delete('/empresas/:empresaId(\\d+)',
  sessionController.loginRequired,
  empresaController.destroy);

// Routes for the resource /routs
router.get('/routs', routController.index);
router.get('/routs/:routId(\\d+)',
  sessionController.loginRequired,
  routController.show);
router.get('/routs/new',
  sessionController.loginRequired,
  routController.new);
router.post('/routs',
  sessionController.loginRequired,
  routController.create);
router.get('/routs/:routId(\\d+)/edit',
  sessionController.loginRequired,
  routController.edit);
router.put('/routs/:routId(\\d+)',
  sessionController.loginRequired,
  routController.update);
router.delete('/routs/:routId(\\d+)',
  sessionController.loginRequired,
  routController.destroy);

// Routes for the resource /Unidads
router.get('/unidads', unidadController.index);
router.get('/unidads/:unidadId(\\d+)',
  sessionController.loginRequired,
  unidadController.show);
router.get('/unidads/new', sessionController.loginRequired,
  unidadController.new);
router.post('/unidads',
  sessionController.loginRequired,
  unidadController.create);
router.get('/unidads/:unidadId(\\d+)/edit',
  sessionController.loginRequired,
  unidadController.edit);
router.put('/unidads/:unidadId(\\d+)',
  sessionController.loginRequired,
  unidadController.update);
router.delete('/unidads/:unidadId(\\d+)',
  sessionController.loginRequired,
  unidadController.destroy);

// Routes for the resource /Propietarios
router.get('/propietarios', propietarioController.index);
router.get('/propietarios/:propietarioId(\\d+)',
  sessionController.loginRequired,
  propietarioController.show);
router.get('/propietarios/new',
  sessionController.loginRequired,
  propietarioController.new);
router.post('/propietarios',
  sessionController.loginRequired,
  propietarioController.create);
router.get('/propietarios/:propietarioId(\\d+)/edit',
  sessionController.loginRequired,
  propietarioController.edit);
router.put('/propietarios/:propietarioId(\\d+)',
  sessionController.loginRequired,
  propietarioController.update);
router.delete('/propietarios/:propietarioId(\\d+)',
  sessionController.loginRequired,
  propietarioController.destroy);

//router.get('/propietarios/:propietarioId(\\d+)/check', propietarioController.check);

// Routes for the resource /Grupos
router.get('/grupos', grupoController.index);
router.get('/grupos/:grupoId(\\d+)',
  sessionController.loginRequired,
  grupoController.show);
router.get('/grupos/new',
  sessionController.loginRequired,
  grupoController.new);
router.post('/grupos',
  sessionController.loginRequired,
  grupoController.create);
router.get('/grupos/:grupoId(\\d+)/edit',
  sessionController.loginRequired,
  grupoController.edit);
router.put('/grupos/:grupoId(\\d+)',
  sessionController.loginRequired,
  grupoController.update);
router.delete('/grupos/:grupoId(\\d+)',
  sessionController.loginRequired,
  grupoController.destroy);


module.exports = router;
