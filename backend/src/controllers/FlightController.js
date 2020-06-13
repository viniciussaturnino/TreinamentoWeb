const connection = require('../database/connection');

module.exports = {
    // Listing route for all flights
    async index (request, response) {
        const flights = await connection('flights').select('*');

        return response.json(flights);
    },
    
    // Creation route for new flights
    async create (request, response) {
        const {destiny, date, hour, value} = request.body;
        const airline_id = request.headers.authorization;

        const [id] = await connection('flights').insert({
            destiny,
            date,
            hour,
            value,
            airline_id,
        })

        return response.json({ id });
    }

}