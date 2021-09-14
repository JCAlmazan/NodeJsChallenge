// Controllers
const authController = require('../controllers/auth');

const authMiddleware = require('../middleware/auth');

const characterController = require('../controllers/character');

const movieController = require('../controllers/movie');

module.exports = (app) => {
   app.post('/auth/login', authController.authenticate);

   app.get('/characters', authMiddleware.verifyToken, characterController.list);
   app.post('/characters', authMiddleware.verifyToken, characterController.create);
   app.put('/characters/:id', authMiddleware.verifyToken, characterController.update);
   app.delete('/characters/:id', authMiddleware.verifyToken, characterController.delete);
   app.get('/characters/:id', authMiddleware.verifyToken, characterController.view);
   app.get('/characters/name/:name', authMiddleware.verifyToken, characterController.findByName);
   app.get('/characters/age/:age', authMiddleware.verifyToken, characterController.findByAge);
   app.get('/characters/movie/:movie', authMiddleware.verifyToken, characterController.findByMovie);

   app.get('/movies', authMiddleware.verifyToken, movieController.list);
   app.post('/movies', authMiddleware.verifyToken, movieController.create);
   app.put('/movies/:id', authMiddleware.verifyToken, movieController.update);
   app.delete('/movies/:id', authMiddleware.verifyToken, movieController.delete);
   app.get('/movies/:id', authMiddleware.verifyToken, movieController.view);
   app.get('/movies/name/:name', authMiddleware.verifyToken, movieController.findByName);
   app.get('/movies/genre/:genreId', authMiddleware.verifyToken, movieController.findByGenre);
   app.get('/movies/order/:order', authMiddleware.verifyToken, movieController.orderByCreationDate);
};