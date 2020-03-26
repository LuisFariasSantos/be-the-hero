const express = require('express');
const Ongcontroller = require('./controllers/OngController'); 
const Incidentcontroller = require('./controllers/IncidentController');
const Profilecontroller = require('./controllers/ProfileController');
const Sessioncontroller = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', Sessioncontroller.create)
//listagem de ongs cadastradas
routes.get('/ongs', Ongcontroller.index);//listagem das ongs
routes.post('/ongs', Ongcontroller.create);//cadastro de ongs
//routes.post('/ongs', async (request,response) => {/* novo jeito de chamar uma função*/});

routes.get('/incidents', Incidentcontroller.index)//listagem de incidentes
routes.post('/incidents', Incidentcontroller.create)//cadastro de incidentes
routes.delete('/incidents/:id', Incidentcontroller.delete)//deletar um incidente
routes.get('/profile', Profilecontroller.index);//listando todos os casos de uma ong especifíca
module.exports = routes;
