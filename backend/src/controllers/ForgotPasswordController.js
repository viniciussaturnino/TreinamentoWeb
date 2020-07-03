const connection = require('../database/connection');
const crypto = require('crypto');
const mailer = require('../modules/mailer');

module.exports = {
    async ForgotPassword(request, response){
        const { email } = request.body;

        let airline = [];

        try {
            airline = await connection('airlines').where('email', email).select('*').first();

            if(!airline)
                return response.status(400).send({ error: 'Linha não encontrada' });

            const token = crypto.randomBytes(20).toString('HEX');
            const now = new Date();
            now.setHours(now.getHours() + 1);

            const airlineId = await connection('airlines').where('id', airline.id).select('id').first();

            await connection('airlines').where('id', airlineId.id).update({
                token: token,
                tokenExpires: now,
            });

            console.log(airlineId.id);
            console.log(token);
            console.log(now);

            mailer.sendMail({
                to: email,
                from: 'viniciussaturnino07@hotmail.com',
                template: 'auth/forgotPassword',
                context: { token },
            }, (err) => {
                if(err)
                    return response.status(400).send({ error: 'Falha ao enviar email' });
            })

        } catch (err) {
            console.log(err);
            return response.status(400).send({ error: 'Erro na recuperação de senha' });
        }

        return response.send('Email enviado com sucesso');
    }
}