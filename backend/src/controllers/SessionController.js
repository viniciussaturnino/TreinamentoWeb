const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        // const { id } = request.body;
        const { email, password } = request.body;

        // const airline = await connection('airlines').where('id', id).select('name').first();
        const airline_email = await connection('airlines').where('email', email).select('*').first();
        const airline_password = await connection('airlines').where('password', password).select('*').first();

        if(!airline_email || !airline_password){
            return response.status(400).json({ error: 'Email ou senha não correspondem' });
        }

        return response.json(airline_email);
    }
}