const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');
const { request } = require('http');
const { response } = require('express');

const routes = express.Router();

// Listing route for all airlines
routes.get('/airlines', async (request, response) => {
    const airlines = await connection('airlines').select('*');

    return response.json(airlines);
});

// Creation route for a new airline
routes.post('/airlines', async (request, response) => {
    const {name, email, city, uf} = request.body;
    // create a random ID
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('airlines').insert({
        id,
        name,
        email,
        city,
        uf
    })

    return response.json({ id });
});


/*
routes.post('/flights', async (request, response) => {
    const {destiny, date, hour, value} = request.body;

    await connection('flights').insert({
        id,
        destiny,
        date,
        hour,
        value
    })

    return response.json({ id });
});*/


module.exports = routes;