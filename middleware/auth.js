const jwt = require('jsonwebtoken');

const auth = require('../config/auth');

module.exports = {

  async verifyToken(req, res, next) {
    const token = req.headers['access-token'];

    if (token) {
      jwt.verify(token, auth.key, (err, decoded) => {
        if (err) {
          return res.json({ mensaje: 'Invalid Token' });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.send({
        mensaje: 'No token provided!'
      });
    }
  }

}