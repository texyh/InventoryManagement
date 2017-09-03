const express = require('express');
const route = express.Router();
const assetRoutes = require('./assetRoutes');
const authController = require('../controllers/userAuth');

route.get('/', (req, res, next) => {
  res.send({ success: 'Homepag' });
});

route.post('/login', (req, res, next) => {
  authController.login(req, res, next);
});

route.post('/signup', (req, res, next) => {
  authController.signup(req, res, next);
});

route.post('/logout', (req, res, next) => {
  res.send('I will logout the use later');
});

route.use('/assets', assetRoutes);

module.exports = route;