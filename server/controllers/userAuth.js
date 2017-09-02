const models = require('../models');
const fancyID = require('../fancyId');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const oneDay = 60 * 60 * 24;
const oneMinute = 60;

function endorseUser(user, res) {
  const userData = user.dataValues;
  delete userData.password;
  const token = jwt.sign(userData, process.env.secret, { expiresIn: oneMinute });
  res.json(token);
}

function login(req, res, next) {
  models.User.find({ where: { email: req.body.email } })
    .then((user) => {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        endorseUser(user, res);
      } else {
        res.json({ error: 'Invalid email or password.' });
      }
    });
}

function logout(req, res, next) {
  // models.User.find({})
}

function signup(req, res, next) {
  req.body.id = fancyID();
  models.User.create(req.body)
    .then((user) => {
      res.json({ success: 'Sign up successful. Proceed to login.' });
    })
    .catch((err) => {
      Logger.error(`Error: ${err}`);
      res.json({ error: err.message });
    });
}

module.exports = {
  login,
  logout,
  signup
}