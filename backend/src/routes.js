const express = require('express');
const AirlineController = require('./controllers/AirlineController');
const FlightController = require('./controllers/FlightController');

const routes = express.Router();

routes.get('/airlines', AirlineController.index);
routes.post('/airlines', AirlineController.create);

routes.get('/flights', FlightController.index);
routes.post('/flights', FlightController.create);
routes.delete('/flights/:id', FlightController.delete);

module.exports = routes;