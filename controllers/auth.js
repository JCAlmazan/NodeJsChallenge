const User = require("../models").user;

const jwt = require('jsonwebtoken');

const auth = require('../config/auth');

var bcrypt = require("bcryptjs");

module.exports = {

  async register(req, res) {
    try {
      const user = await User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
      });
      res.status(201).send({ message: "User was registered successfully!" });
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        where: { email: req.body.email }
      })
      if (user) {
        let passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }

        var token = jwt.sign({ id: user.id }, auth.key, {
          expiresIn: 86400 // expires in 24 hours
        });

        res.status(201).send({        
          email: user.email,
          accessToken: token,
          Caution: "Please save this token in order to use at next petitions"
        });
      } else {
        res.status(404).send("Incorrect Mail")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

}

