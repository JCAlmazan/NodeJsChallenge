// Controllers
const characterController = require('../controllers/character');

module.exports = (app) => {
   app.get('/characters', characterController.list);
   app.post('/characters', characterController.create);
};