
exports.up = function(knex) {
  return knex.schema.createTable('airlines', function(table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
      table.string('token').notNullable();
      table.date('tokenExpires').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('airlines');
};
