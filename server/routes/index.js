const express = require('express');
const route = express.Router();
const assetRoutes = require('./assetRoutes');

route.get('/', (req, res, next) => {
  res.send({ success: 'Homepag' });
});

route.get('/login', (req, res, next) => {
  res.send('I will find the use later');
});

route.get('/signup', (req, res, next) => {
  res.send('I will register the use later');
});

route.get('/logout', (req, res, next) => {
  res.send('I will logout the use later');
});

route.use('/assets', assetRoutes);

module.exports = route;