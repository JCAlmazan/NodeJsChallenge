const jwt = require('jsonwebtoken');

const auth = require('../config/auth');

const User = require("../models").user;

module.exports = {

  // checks if a correct token was given
  async verifyToken(req, res, next) {
    let token = req.headers['access-token'];

    if (!token) {
      return res.status(403).send({
        message: "No token provided! Please enter your accessToken in HTTP headers"
      });
    }

    jwt.verify(token, auth.key, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized! Please enter a valid token provided at login"
        });
      }
      req.userId = decoded.id;
      next();
    });
  },

  // checks if given email is already in use
  async verifyRegister(req, res, next) {
    try {
      const user = await User.findOne({
        where: { email: req.body.email }
      })
      if (user) {
        res.status(400).send("Email is already in use!");
      } else {
        next();
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }

}