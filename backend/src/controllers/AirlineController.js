const crypto = require('crypto');
const bcrypt = require('bcrypt');
const connection = require('../database/connection');

module.exports = {
    // Listing route for all airlines
    async index (request, response) {
        const airlines = await connection('airlines').select('*');
    
        return response.json(airlines);
    },

    // Creation route for a new airline
    async create (request, response) {
        const {name, email, password1, city, uf} = request.body;

        const user = await connection('airlines').where('email', email).select('email').first();
        if(user)
            return response.status(400).send({ error: 'Linha Aérea já cadastrada!' });
        else{
            // create a random ID
            const id = crypto.randomBytes(4).toString('HEX');
            //encrypted password
            const password = bcrypt.hashSync(password1, 10);
        
            await connection('airlines').insert({
                id,
                name,
                email,
                password,
                city,
                uf
            })
        
            return response.json({ password });
        }
    }
}