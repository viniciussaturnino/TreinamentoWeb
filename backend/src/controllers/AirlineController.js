const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    // Listing route for all airlines
    async index (request, response) {
        const airlines = await connection('airlines').select('*');
    
        return response.json(airlines);
    },

    // Creation route for a new airline
    async create (request, response) {
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
    }
}