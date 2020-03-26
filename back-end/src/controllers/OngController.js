const crypto = require('crypto');/**
* Pacote do Node
* utilizaremos um modulo dela para gerar uma string aleatória que será a id da ong
*/ 
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {

        const ongs = await connection('ongs').select('*');
      
          return response.json(ongs);
      },//lisyagem de ongs cadastradas

    async create(request,response) {//linha 03 a 20 cadastro de ongs
        const {name, email, whatsapp, city, uf} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
       await connection('ongs').insert({/**como a execução deste insert demora, o await signifca que o resto do código só executará após terminar a função insert */
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({/*retornando objetos no formato json*/
            id
        });
    }
}