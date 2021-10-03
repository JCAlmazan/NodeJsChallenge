const User = require("../models").user;

const jwt = require('jsonwebtoken');

const auth = require('../config/auth');

var bcrypt = require("bcryptjs");

// To send an email when register
function sendEmail(email) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: 'juancruzalmazan1994@gmail.com', // Use the email address or domain you verified above
    subject: 'Welcome to my NodeJS Challenge!',
    text: 'Thank you!',
    html: '<strong>Thank you!</strong>',
  };
  //ES8
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();
}

// Validate email using regex
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

module.exports = {

  // Register an User using body data
  async register(req, res) {
    try {
      if(validateEmail(req.body.email)){
        const user = await User.create({
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 8)
        });
        sendEmail(req.body.email);
        res.status(201).send({ message: "User was registered successfully!" });
      } else {
        res.status(404).send("You have entered an invalid email address!")
      }

    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  // Login an User using body data
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
          Caution: "Please save this token to use at next petitions, this token expires in 24hs"
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

