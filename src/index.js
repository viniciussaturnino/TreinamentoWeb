const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.send('Hello World');
});

app.post('/users', (request, response) => {
    const user = request.body;

    return response.json(user);
});

app.get('/users', (request, response) => {
    const data = request.query;
    
    return response.json(data);
});

app.listen(3333);