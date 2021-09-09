// Controllers
const characterController = require('../controllers/character');

const movieController = require('../controllers/movie');

module.exports = (app) => {
   app.get('/characters', characterController.list);
   app.post('/characters', characterController.create);
   app.put('/characters/:id', characterController.update);
   app.delete('/characters/:id', characterController.delete);
   app.get('/characters/:id', characterController.view);
   app.get('/characters/name/:name', characterController.findByName);
   app.get('/characters/age/:age', characterController.findByAge);
   app.get('/characters/movie/:movie', characterController.findByMovie);

   app.get('/movies', movieController.list);
   app.post('/movies', movieController.create);
   app.put('/movies/:id', movieController.update);
   app.delete('/movies/:id', movieController.delete);
   app.get('/movies/:id', movieController.view);
   app.get('/movies/name/:name', movieController.findByName);
   app.get('/movies/genre/:genreId', movieController.findByGenre);
   app.get('/movies/order/:order', movieController.orderByCreationDate);
};