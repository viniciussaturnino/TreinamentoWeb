const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        // const { id } = request.body;
        const { email, password } = request.body;

        const airline = await connection('airlines').where('email', email).select('*').first();
        //const airline_password = await connection('airlines').where('password', password).select('*').first();
        if(!airline)
            return response.status(404).send({ error: 'Usuário inexistente' });
        // console.log(user.password);
        if(airline.password !== password){
            return response.status(400).json({ error: 'Senha inválida' });
        }

        return response.json(airline);
    }
}