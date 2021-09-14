const jwt = require('jsonwebtoken');

const auth = require('../config/auth');

module.exports = {

  async verifyToken(req, res, next) {
    let token = req.headers['access-token'];

    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      });
    }
  
    jwt.verify(token, auth.key, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!"
        });
      }
      req.userId = decoded.id;
      next();
    });
  }

}