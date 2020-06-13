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
    },

    // Delete route for specific flight
    async delete (request, response) {
        const { id } = request.params;
        const airline_id = request.headers.authorization;

        const flight = await connection('flights').where('id', id).select('airline_id').first();

        if(flight.airline_id !== airline_id){
            return response.status(401).json({ error: 'Operation not permited' });
        }

        await connection('flights').where('id', id).delete();

        return response.status(204).send();
    }

}