// Controllers
const characterController = require('../controllers/character');

module.exports = (app) => {
   app.get('/characters', characterController.list);
   app.post('/characters', characterController.create);
   app.put('/characters/:id', characterController.update);
   app.delete('/characters/:id', characterController.delete);
   app.get('/characters/:id', characterController.view);
   app.get('/characters/name/:name', characterController.findByName);
   app.get('/characters/age/:age', characterController.findByAge);
};