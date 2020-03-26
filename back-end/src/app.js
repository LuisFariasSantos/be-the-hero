
const express = require('express');

const cors = require('cors')

const routes = require('./routes')

const app = express();
app.use(cors());
app.use(express.json());//avisando que estou usando JSOn nas requisições
app.use(routes);
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end;
 * POST: Criar uma informação no back-end ou recebe informações;
 * PUT: Alterar uma informação no back-end;
 * DELETE: Deletar uma informação no back-end;
 */

 /**
  * Tipos de Parâmetros:
  * 
  * Query Paramns: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação);
  * Route paramns: Parâmetros utilizados para identificar recursos, uma id;
  * Request body: Corpo da Requisição, utilizado para criar ou alterar recursos;
  */

app.listen(3333, function(){
    console.log('Rodando');
})