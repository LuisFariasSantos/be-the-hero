
exports.up = function(knex) {//método up, ciração da tabela
  return knex.schema.createTable('ongs', function(table) {//criando uma tabela
      table.string('id').primary();//criando os atributos
      table.string('name').notNullable();//o atributo não pode ser nulo
      table.string('email').notNullable();
      table.string('Whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
