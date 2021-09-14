const User = require("../models").user;

const jwt = require('jsonwebtoken');

const auth = require('../config/auth');

module.exports = {

  async authenticate(req, res) {
    if (req.body.email === "jose" && req.body.password === "1234") {
      const payload = {
        check: true
      };
      const token = jwt.sign(payload, auth.key);
      res.json({
        mensaje: 'Correct Authentication',
        token: token
      });
    } else {
      res.json({ mensaje: "Incorrect Mail or Password" })
    }
  },

}

