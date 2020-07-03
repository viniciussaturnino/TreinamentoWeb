const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {
    async recoverPassword(request, response){
        const { email, token, password1 } = request.body;

        let airline = [];

        try {
            airline = await connection('airlines').where('email', email).select('*').first();

            if(!airline)
                return response.status(400).send({ error: 'Linha não encontrada' });

            if(token !== airline.token)
                return response.status(400).send({ error: 'Token inválido' });

            const now = new Date();

            if(now > airline.tokenExpires)
                return response.status(400).send({ error: 'Token expirado, gere um novo' });

            await connection('airlines').where('email', airline.email).update({
                password: bcrypt.hashSync(password1, 10),
            });

            response.send('Senha atualizada com sucesso');
        } catch (err) {
            console.log(err);
            return response.status(400).send({ error: 'Erro na recuperação de senha' });
        }

    }
}