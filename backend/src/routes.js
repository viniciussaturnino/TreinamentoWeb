const express = require('express');
const AirlineController = require('./controllers/AirlineController');

const routes = express.Router();

routes.get('/airlines', AirlineController.index);
routes.post('/airlines', AirlineController.create);

module.exports = routes;