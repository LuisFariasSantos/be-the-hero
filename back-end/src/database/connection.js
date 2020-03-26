const knex = require('knex');

const configuration = require('../../knexfile');

const connection = knex(configuration.development);//acessando a conexão de desenvolvedor

module.exports = connection;