const express = require('express');
const assetRoutes = express.Router();

assetRoutes.post('/:id/request', (req, res, next) => {
  res.send('handle assets requests');
});

assetRoutes.post('/:id/confirm', (req, res, next) => {
  res.send('handle assets responses');
});

assetRoutes.post('/', (req, res, next) => {
  res.send('add new assets');
});

assetRoutes.get('/:id', (req, res, next) => {
  res.send('get one existing assets');
});

assetRoutes.put('/:id', (req, res, next) => {
  res.send('edit already existing assets');
});

assetRoutes.delete('/:id', (req, res, next) => {
  res.send('delete already existing assets');
});

assetRoutes.get('/', (req, res, next) => {
  res.send('get all assets');
});


module.exports = assetRoutes;