const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send('Hello World');
});

app.get('/users', (request, response) => {
    return response.json([
        'Matola',
        'Maia',
        'Monteiro',
        'Alonso'
    ]);
});

app.listen(3333);