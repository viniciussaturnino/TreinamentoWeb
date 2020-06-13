const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();

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

module.exports = routes;