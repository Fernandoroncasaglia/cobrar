//importar express
const express = require('express');
//instaciando o express
const app = express();

app.get('/cliente', (request, response) => {
    return response.json({
        teste: 'HeloDev!'
    });
});
//dizendo em qual porta ela vai trabalhar
app.listen(3333, () => {
    console.log('Api Started now!');
    }
);