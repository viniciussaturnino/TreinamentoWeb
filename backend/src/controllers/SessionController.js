const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
    async create(request, response){
        const { email, password } = request.body;

        const airline = await connection('airlines').where('email', email).select('*').first();
        
        if(!airline)
            return response.status(404).send({ error: 'Usuário inexistente' });
        
        if(!await bcrypt.compare(password, airline.password))
            return response.status(400).json({ error: 'Senha inválida' });
        
        return response.json(airline);
    }
}