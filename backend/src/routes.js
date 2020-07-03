const express = require('express');
const AirlineController = require('./controllers/AirlineController');
const FlightController = require('./controllers/FlightController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const ForgotPasswordController = require('./controllers/ForgotPasswordController');
const RecoverPasswordController = require('./controllers/RecoverPasswordController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/airlines', AirlineController.index);
routes.post('/airlines', AirlineController.create);

routes.get('/profile', ProfileController.index);

routes.get('/flights', FlightController.index);
routes.post('/flights', FlightController.create);
routes.delete('/flights/:id', FlightController.delete);

routes.post('/forgot_password', ForgotPasswordController.ForgotPassword);
routes.post('/recover', RecoverPasswordController.recoverPassword);

module.exports = routes;